import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const workflow = {
      "name": "LinkedIn Job Search: Auto-Match Resume with ai + Cover Letter Generator & discord Alerts",
      "nodes": [
        {
          "parameters": {
            "fieldToSplitOut": "links",
            "options": {}
          },
          "id": "bd8ca013-eefb-439e-b15b-48b5502ffa91",
          "name": "Split Out",
          "type": "n8n-nodes-base.splitOut",
          "position": [
            2000,
            1080
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "options": {}
          },
          "id": "22a12a7d-2ef7-47d2-8a01-50d1b24b3dc8",
          "name": "Loop Over Items",
          "type": "n8n-nodes-base.splitInBatches",
          "position": [
            2224,
            1080
          ],
          "typeVersion": 3
        },
        {
          "parameters": {
            "amount": 10
          },
          "id": "4f32bc04-34d5-48d3-b87b-eb6f9e5d655b",
          "name": "Wait",
          "type": "n8n-nodes-base.wait",
          "position": [
            2512,
            928
          ],
          "webhookId": "c9cb4878-ae4d-4b8e-bd37-5395011f7761",
          "typeVersion": 1.1
        },
        {
          "parameters": {
            "conditions": {
              "options": {
                "version": 2,
                "leftValue": "",
                "caseSensitive": true,
                "typeValidation": "loose"
              },
              "conditions": [
                {
                  "id": "1499f1ac-a7ae-4983-85c7-aa7b8445b2e2",
                  "operator": {
                    "type": "number",
                    "operation": "gte"
                  },
                  "leftValue": "={{ $json.score }}",
                  "rightValue": 50
                }
              ],
              "combinator": "and"
            },
            "looseTypeValidation": true,
            "options": {}
          },
          "id": "19bf5463-06a1-4d69-99b3-11d4e0b2c7b1",
          "name": "Score Filter",
          "type": "n8n-nodes-base.if",
          "position": [
            4880,
            944
          ],
          "typeVersion": 2.2
        },
        {
          "parameters": {
            "promptType": "define",
            "text": "=Hi, you are a helpful job matcher, you read my resume then analyze the given resume and job description and provide a job matching score. also write a cover letter based on my resume and the job description. cover letter must be at least 2 paragraph and ignore the name, address and signiture part from start and end.\nif you are using special character like \" use \\ to escape it. output must be parse in json without error. \n\nfor example your response should be like: {\"score\": 1, \"coverLetter\": \"sample cover letter\" }\na score of 1-100\n\njob_description: {{ $('Parse Job Attributes').item.json.description }}\nmy_resume: {{ $('Extract from File').item.json.text }}\n\nI've also attached my skills, certs, work experience, projects, and meta data. feel free to pull from these as well as my resume when creating coverletter\n",
            "options": {}
          },
          "id": "dbe8693f-b1bb-4a90-81f8-74e547da6345",
          "name": "AI Agent",
          "type": "@n8n/n8n-nodes-langchain.agent",
          "position": [
            3760,
            768
          ],
          "typeVersion": 2,
          "onError": "continueErrorOutput"
        },
        {
          "parameters": {
            "operation": "pdf",
            "options": {}
          },
          "id": "7facf548-a5ae-40f6-9733-30b7dd18f5c6",
          "name": "Extract from File",
          "type": "n8n-nodes-base.extractFromFile",
          "position": [
            880,
            1080
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "jsCode": "let url = \"https://www.linkedin.com/jobs/search/?f_TPR=r86400\";\n\nconst input = $input.first().json;\nconst keyword = input.keyword;\nconst location = input.location;\nconst experienceLevel = input.experienceLevel;\nconst remote = input.remote;\nconst jobType = input.jobType;\nconst easyApply = input.easyApply;\n\nif (keyword) {\n  url += `&keywords=${keyword}`;\n}\n\nif (location) {\n  url += `&location=${location}`;\n}\n\nif (experienceLevel && typeof experienceLevel === \"string\") {\n  const transformedExperiences = experienceLevel\n    .split(\",\")\n    .map((exp) => {\n      switch (exp.trim()) {\n        case \"Internship\":\n          return \"1\";\n        case \"Entry level\":\n          return \"2\";\n        case \"Associate\":\n          return \"3\";\n        case \"Mid-Senior level\":\n          return \"4\";\n        case \"Director\":\n          return \"5\";\n        case \"Executive\":\n          return \"6\";\n        default:\n          return \"\";\n      }\n    })\n    .filter(Boolean);\n  url += `&f_E=${transformedExperiences.join(\",\")}`;\n}\n\nif (remote && typeof remote === \"string\") {\n  const transformedRemote = remote\n    .split(\",\")\n    .map((e) => {\n      switch (e.trim()) {\n        case \"Remote\":\n          return \"2\";\n        case \"Hybrid\":\n          return \"3\";\n        case \"On-Site\":\n          return \"1\";\n        default:\n          return \"\";\n      }\n    })\n    .filter(Boolean);\n  url += `&f_WT=${transformedRemote.join(\",\")}`;\n}\n\nif (jobType && typeof jobType === \"string\") {\n  const transformedJobType = jobType\n    .split(\",\")\n    .map((type) => {\n      switch (type.trim()) {\n        case \"Full-time\":\n          return \"F\";\n        case \"Part-time\":\n          return \"P\";\n        case \"Contract\":\n          return \"C\";\n        case \"Temporary\":\n          return \"T\";\n        case \"Other\":\n          return \"O\";\n        case \"Internship\":\n          return \"I\";\n        default:\n          return \"\";\n      }\n    })\n    .filter(Boolean);\n  url += `&f_JT=${transformedJobType.join(\",\")}`;\n}\n\nif (easyApply) {\n  url += \"&f_EA=true\";\n}\n\nreturn { url };"
          },
          "id": "8e9679f9-f523-4ae5-933a-50f4e085f9d1",
          "name": "Create search URL",
          "type": "n8n-nodes-base.code",
          "position": [
            1328,
            1088
          ],
          "typeVersion": 2,
          "notes": "this acts weirdly so i like to pin my own json url\nhttps://www.linkedin.com/jobs/search/?currentJobId=4278461655&distance=25&f_E=2&f_I=4&f_JT=F&f_PP=104937023&geoId=104937023&keywords=nodejs%20python&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true&sortBy=R"
        },
        {
          "parameters": {
            "rule": {
              "interval": [
                {
                  "triggerAtHour": 5
                }
              ]
            }
          },
          "id": "a1261369-4939-44a5-908f-1f79cf05d275",
          "name": "Schedule Trigger",
          "type": "n8n-nodes-base.scheduleTrigger",
          "position": [
            432,
            1080
          ],
          "notesInFlow": false,
          "typeVersion": 1.2
        },
        {
          "parameters": {
            "content": "Worklofw executes daily at 5pm, you can change the interval and time of execution.\n",
            "height": 260
          },
          "id": "bff65551-c8ab-4f3b-a6f7-1705b340a4dc",
          "name": "Sticky Note",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            360,
            980
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Some way shape or form add your resume to this workflow. im lucky enough to have mine hosted but you can use google drive if you like",
            "height": 260,
            "color": 4
          },
          "id": "5e5e4480-3608-45de-bda0-e7d36a2b20c3",
          "name": "Sticky Note1",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            584,
            980
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Convert pdf file into text to AI can read content.",
            "height": 260,
            "color": 5
          },
          "id": "b4ed86d6-8562-4738-9972-5eaa2ef296b5",
          "name": "Sticky Note2",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            808,
            980
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Read search filter consiste of keywords, location, experience level, remot, job type and easy apply from google sheet.\n\nYou can download [this Template](https://docs.google.com/spreadsheets/d/1mtKVxj_z_QCLGXMx0mJVihWSgS41SzHfU1Rv4r_mRY0) and copy in your personal space.",
            "height": 300,
            "width": 400,
            "color": 4
          },
          "id": "5c7bb6c3-ecfa-4fdd-a6f0-e1f8da743383",
          "name": "Sticky Note3",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            960,
            864
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Create Linkedin search url from filter params.",
            "height": 260,
            "width": 180
          },
          "id": "fc4bc16a-a825-4d26-8b9b-2254338c7d56",
          "name": "Sticky Note4",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            1286,
            980
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "url": "={{ $json.url }}",
            "options": {}
          },
          "id": "13197864-2918-4e55-8991-8861ad723455",
          "name": "Fetch Jobs from Linkedin",
          "type": "n8n-nodes-base.httpRequest",
          "position": [
            1552,
            1080
          ],
          "typeVersion": 4.2
        },
        {
          "parameters": {
            "content": "Extrat Job links from Linkdin search result",
            "height": 320,
            "width": 220
          },
          "id": "e83ad624-2aca-4ad4-b82b-69c2ea14deb8",
          "name": "Sticky Note5",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            1490,
            920
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "url": "={{ $json.links }}",
            "options": {}
          },
          "id": "df5815da-e55c-494e-919c-07b93ec4b9fa",
          "name": "Fetch Job Page",
          "type": "n8n-nodes-base.httpRequest",
          "position": [
            2640,
            928
          ],
          "executeOnce": false,
          "retryOnFail": true,
          "typeVersion": 4.2,
          "waitBetweenTries": 5000,
          "onError": "continueRegularOutput"
        },
        {
          "parameters": {
            "content": "Parse job HTML page, extract **title**, **company**, **location**, **jobDescription** and **applyLink** from it",
            "height": 300,
            "width": 380,
            "color": 6
          },
          "id": "33b9404e-ca19-48f5-b55d-c62d6c5d4507",
          "name": "Sticky Note8",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            2496,
            784
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "I'm sure you can get away with not using an ai if you just want the job\n\nAI model compare your resume and job description and rate your resume from 0-100, (0 does not match, 100 fully match) and also AI will write a sample cover letter based on your resume and your expriences and job description.\nI used Gemini model here, you can use othe AI model like OpenAI (chat GPT)",
            "height": 440,
            "width": 540,
            "color": 7
          },
          "id": "a5c28135-f232-4fee-8127-646ec8f20854",
          "name": "Sticky Note9",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            3632,
            560
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Convert AI output to JSON.",
            "height": 300,
            "width": 180,
            "color": 6
          },
          "id": "7bba7f09-fd34-477a-a4db-3c4baf3ca5af",
          "name": "Sticky Note10",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            3078,
            796
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Send discord message if matching score is greater than criteria defined in previuos step.",
            "height": 300,
            "width": 260,
            "color": 5
          },
          "id": "d5d301b7-fd22-4c4f-8523-39779ce8c88d",
          "name": "Sticky Note12",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            5088,
            864
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "Filter job that has score higher than 50. you can change filter criteria in this node.",
            "height": 300,
            "width": 260,
            "color": 4
          },
          "id": "b610e530-ad72-470a-a52e-d592797c51d4",
          "name": "Sticky Note13",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            4784,
            832
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "operation": "extractHtmlContent",
            "extractionValues": {
              "values": [
                {
                  "key": "title",
                  "cssSelector": "div h1"
                },
                {
                  "key": "company",
                  "cssSelector": "div span a"
                },
                {
                  "key": "location",
                  "cssSelector": "div span[class*='topcard__flavor topcard__flavor--bullet']"
                },
                {
                  "key": "description",
                  "cssSelector": "div.description__text.description__text--rich"
                },
                {
                  "key": "jobid",
                  "cssSelector": "a[data-item-type='semaphore']",
                  "returnValue": "attribute",
                  "attribute": "data-semaphore-content-urn"
                }
              ]
            },
            "options": {}
          },
          "id": "a4d125b1-8d0c-4927-9470-33ab24b6706b",
          "name": "Parse Job Attributes",
          "type": "n8n-nodes-base.html",
          "position": [
            2768,
            928
          ],
          "typeVersion": 1.2
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "784ead57-9d83-4e08-b83c-23fa165bf045",
                  "name": "description",
                  "type": "string",
                  "value": "={{ $json.description.replaceAll(/\\s+/g, \" \") }}"
                },
                {
                  "id": "fd3c9d2c-5ff9-46a7-b70a-f990fbc7da9d",
                  "name": "jobid",
                  "type": "string",
                  "value": "={{ $json.jobid.split(\":\").last() }}"
                },
                {
                  "id": "27a20cd2-ab0d-42b7-9cee-ea64e0e26ea3",
                  "name": "applyLink",
                  "type": "string",
                  "value": "={{ \"https://www.linkedin.com/jobs/view/\"+ $json.jobid.split(\":\").last() }} "
                }
              ]
            },
            "includeOtherFields": true,
            "options": {}
          },
          "id": "ba71d7c3-a89a-447d-aba6-7a0fdfda19dc",
          "name": "Modify Job Attributes",
          "type": "n8n-nodes-base.set",
          "position": [
            3120,
            936
          ],
          "typeVersion": 3.4
        },
        {
          "parameters": {
            "operation": "extractHtmlContent",
            "extractionValues": {
              "values": [
                {
                  "key": "links",
                  "cssSelector": "ul.jobs-search__results-list li div a[class*=\"base-card\"]",
                  "returnValue": "attribute",
                  "attribute": "href",
                  "returnArray": true
                }
              ]
            },
            "options": {}
          },
          "id": "af4831f6-f9fa-4d68-aee1-d0ba38d8a46c",
          "name": "Extract Job Links",
          "type": "n8n-nodes-base.html",
          "position": [
            1776,
            1080
          ],
          "typeVersion": 1.2
        },
        {
          "parameters": {
            "authentication": "webhook",
            "content": "Jobs ready please check the site",
            "options": {}
          },
          "type": "n8n-nodes-base.discord",
          "typeVersion": 2,
          "position": [
            5152,
            976
          ],
          "id": "8b038eef-d136-4d24-862a-eba2995d6ac3",
          "name": "Discord",
          "webhookId": "7631b9b3-459c-478a-9f2e-a4992cb7a446",
          "credentials": {
            "discordWebhookApi": {
              "id": "Js7jXV6RAJG2gYR1",
              "name": "Job Channel webhook"
            }
          }
        },
        {
          "parameters": {
            "url": "https://adarcher.app/api/resume",
            "options": {}
          },
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            656,
            1080
          ],
          "id": "023684ae-a31d-4bb1-b655-e2a2fc08929d",
          "name": "HTTP Request"
        },
        {
          "parameters": {
            "options": {}
          },
          "type": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
          "typeVersion": 1,
          "position": [
            3648,
            864
          ],
          "id": "9cf57670-0e88-4196-a0d1-a9008f84eadc",
          "name": "Google Gemini Chat Model",
          "credentials": {
            "googlePalmApi": {
              "id": "erKOHSDtCZLOGC1A",
              "name": "Google Gemini(PaLM) Api account"
            }
          }
        },
        {
          "parameters": {
            "url": "http://192.168.4.242:3001/api/search-configs",
            "options": {}
          },
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            1104,
            1080
          ],
          "id": "fea0a728-c9e7-4e25-a874-fe7a1dcdd6ab",
          "name": "HTTP Request1"
        },
        {
          "parameters": {
            "method": "POST",
            "url": "http://192.168.4.242:3001/api/n8n/jobs",
            "sendHeaders": true,
            "specifyHeaders": "json",
            "jsonHeaders": "{\n  \"Content-Type\": \"application/json\",\n  \"Accept\": \"application/json\"\n}",
            "sendBody": true,
            "bodyParameters": {
              "parameters": [
                {
                  "name": "title",
                  "value": "={{ $json.title }}"
                },
                {
                  "name": "company",
                  "value": "={{ $json.company }}"
                },
                {
                  "name": "=location",
                  "value": "={{ $json.location }}"
                },
                {
                  "name": "link",
                  "value": "={{ $json.applyLink }}"
                },
                {
                  "name": "score",
                  "value": "={{ $json.score }}"
                },
                {
                  "name": "coverLetter",
                  "value": "={{ $json.coverLetter }}"
                }
              ]
            },
            "options": {}
          },
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            4592,
            812
          ],
          "id": "02386789-57fe-433c-b80f-959833b0eff5",
          "name": "http post",
          "onError": "continueErrorOutput"
        },
        {
          "parameters": {
            "jsCode": "// Get the first input item to extract base fields\nconst first = $input.first().json;\n\nconst title = first.title;\nconst company = first.company;\nconst location = first.location;\nconst description = first.description;\nconst link = first.applyLink;\n\n// Modify each input item\nconst output = $input.all().map(item => {\n  return {\n    json: {\n      ...item.json,  // Preserve existing fields\n      title,\n      company,\n      location,\n      description,\n      applyLink: link,\n      myNewField: 1\n    }\n  };\n});\n\n// Optionally debug\nconsole.log(output);\n\nreturn output;\n"
          },
          "type": "n8n-nodes-base.code",
          "typeVersion": 2,
          "position": [
            4256,
            768
          ],
          "id": "23b5c54a-98d4-4766-9de9-038472124398",
          "name": "job attributes to json"
        },
        {
          "parameters": {
            "jsCode": "const inputItem = $input.first();\n\n// Step 1: Get raw output string\nlet raw = inputItem.json.rawOutput || inputItem.json.output || '';\n\n// Step 2: Clean code block markers\nlet cleaned = raw\n  .trim()\n  .replace(/^```json/i, '')    // remove ```json\n  .replace(/^```/, '')         // or just ```\n  .replace(/```$/, '')         // trailing ```\n  .replace(/^json\\s*/i, '')    // any 'json' prefix\n  .trim();\n\n// Step 3: Fix invalid escape sequences (e.g., \\' => ')\ncleaned = cleaned.replace(/\\\\'/g, \"'\");\n\n// Step 4: Parse JSON\nlet parsed;\ntry {\n  parsed = JSON.parse(cleaned);\n} catch (err) {\n  throw new Error(`Invalid JSON format: ${err.message}\\n\\nCleaned input:\\n${cleaned}`);\n}\n\n// Step 5: Output parsed result\nreturn [{ json: parsed }];\n"
          },
          "type": "n8n-nodes-base.code",
          "typeVersion": 2,
          "position": [
            4256,
            624
          ],
          "id": "22446698-f1d8-4bee-84f6-19c797fe833c",
          "name": "score and code to json"
        },
        {
          "parameters": {
            "mode": "combine",
            "combineBy": "combineAll",
            "options": {}
          },
          "type": "n8n-nodes-base.merge",
          "typeVersion": 3.2,
          "position": [
            4400,
            688
          ],
          "id": "613f2a5e-4955-4e8d-bd40-559e73740a0d",
          "name": "Merge"
        },
        {
          "parameters": {
            "url": "https://antonioarcher.com/api/data",
            "options": {}
          },
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            3344,
            1168
          ],
          "id": "7f8f04ea-21a1-43f1-bd28-c39a075310c0",
          "name": "antonioarcher.com/api"
        },
        {
          "parameters": {
            "mode": "combine",
            "combineBy": "combineAll",
            "options": {}
          },
          "type": "n8n-nodes-base.merge",
          "typeVersion": 3.2,
          "position": [
            3488,
            704
          ],
          "id": "c11fc2df-7011-4b33-b93d-8101ee5ec874",
          "name": "Merge1"
        },
        {
          "parameters": {
            "content": "I used a postgres database. connected to my frontend next js app\n\nsource code: https://github.com/ad-archer/job\n\nbut as long as you get this, as an output you're fine\n[\n  {\n    \"id\": \"string\",                        // Unique ID for this job search entry (can be auto-generated)\n    \"keyword\": \"string\",                  // Space-separated list of skills or technologies (e.g., \"python nodejs typescript\")\n    \"location\": \"string\",                 // Job location (e.g., \"Philadelphia\", \"Remote\", \"New York\")\n    \"experienceLevel\": \"string\",          // Desired experience level (e.g., \"Entry level\", \"Mid level\", \"Senior level\")\n    \"remote\": \"string\",                   // Work type: \"Remote\", \"On-Site\", \"Hybrid\", or combination\n    \"jobType\": \"string\",                  // Type of employment: \"Full-time\", \"Part-time\", \"Contract\", etc.\n    \"easyApply\": true,                    // Whether to filter for easy-apply jobs (true or false)\n    \"isActive\": true,                     // Whether this query is currently active in the system\n    \"createdAt\": \"ISO 8601 timestamp\",    // Creation date (e.g., \"2025-08-06T05:30:20.198Z\")\n    \"updatedAt\": \"ISO 8601 timestamp\"     // Last updated date\n  }\n]\n",
            "height": 300,
            "width": 400,
            "color": 4
          },
          "id": "feeb2488-722e-40dc-9da1-126fadd65a99",
          "name": "Sticky Note14",
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            976,
            1248
          ],
          "typeVersion": 1
        },
        {
          "parameters": {
            "content": "When I created my portfolio I thought it would be smart to create a data file to store, basically meta data about myself. now I found a use for it.",
            "height": 272,
            "width": 224
          },
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            3280,
            1040
          ],
          "typeVersion": 1,
          "id": "cff8cf19-18e2-4772-982a-415fd04aeab7",
          "name": "Sticky Note15"
        },
        {
          "parameters": {
            "content": "Post to my backend postgres database. I created an endpoint on my frontend",
            "height": 320
          },
          "type": "n8n-nodes-base.stickyNote",
          "position": [
            4528,
            688
          ],
          "typeVersion": 1,
          "id": "5fb3d798-2b9f-45b4-9c47-2a343d857397",
          "name": "Sticky Note16"
        }
      ],
      "pinData": {},
      "connections": {
        "Wait": {
          "main": [
            [
              {
                "node": "Fetch Job Page",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "AI Agent": {
          "main": [
            [
              {
                "node": "score and code to json",
                "type": "main",
                "index": 0
              }
            ],
            []
          ]
        },
        "Split Out": {
          "main": [
            [
              {
                "node": "Loop Over Items",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Score Filter": {
          "main": [
            [
              {
                "node": "Discord",
                "type": "main",
                "index": 0
              }
            ],
            [
              {
                "node": "Loop Over Items",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Fetch Job Page": {
          "main": [
            [
              {
                "node": "Parse Job Attributes",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Loop Over Items": {
          "main": [
            [],
            [
              {
                "node": "Wait",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Schedule Trigger": {
          "main": [
            [
              {
                "node": "HTTP Request",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Create search URL": {
          "main": [
            [
              {
                "node": "Fetch Jobs from Linkedin",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Extract Job Links": {
          "main": [
            [
              {
                "node": "Split Out",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Extract from File": {
          "main": [
            [
              {
                "node": "HTTP Request1",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Parse Job Attributes": {
          "main": [
            [
              {
                "node": "Modify Job Attributes",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Modify Job Attributes": {
          "main": [
            [
              {
                "node": "job attributes to json",
                "type": "main",
                "index": 0
              },
              {
                "node": "antonioarcher.com/api",
                "type": "main",
                "index": 0
              },
              {
                "node": "Merge1",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Fetch Jobs from Linkedin": {
          "main": [
            [
              {
                "node": "Extract Job Links",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Discord": {
          "main": [
            []
          ]
        },
        "HTTP Request": {
          "main": [
            [
              {
                "node": "Extract from File",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Google Gemini Chat Model": {
          "ai_languageModel": [
            [
              {
                "node": "AI Agent",
                "type": "ai_languageModel",
                "index": 0
              }
            ]
          ]
        },
        "HTTP Request1": {
          "main": [
            [
              {
                "node": "Create search URL",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "http post": {
          "main": [
            [
              {
                "node": "Score Filter",
                "type": "main",
                "index": 0
              }
            ],
            []
          ]
        },
        "job attributes to json": {
          "main": [
            [
              {
                "node": "Merge",
                "type": "main",
                "index": 1
              }
            ]
          ]
        },
        "score and code to json": {
          "main": [
            [
              {
                "node": "Merge",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "Merge": {
          "main": [
            [
              {
                "node": "http post",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "antonioarcher.com/api": {
          "main": [
            [
              {
                "node": "Merge1",
                "type": "main",
                "index": 1
              }
            ]
          ]
        },
        "Merge1": {
          "main": [
            [
              {
                "node": "AI Agent",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      "active": true,
      "settings": {
        "callerPolicy": "workflowsFromSameOwner",
        "executionOrder": "v1"
      },
      "versionId": "37ccc737-7657-4d83-8873-2be1ae6e813c",
      "meta": {
        "templateId": "6239",
        "templateCredsSetupCompleted": true,
        "instanceId": "047b1cd3674caef001445bdee6542de29eda6940c430daa7ec9ae2a6aa7fa51f"
      },
      "id": "kp6ewMAH09Rep7m4",
      "tags": []
    };

    return NextResponse.json(workflow, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error serving n8n workflow:', error);
    return NextResponse.json(
      { error: 'Failed to serve workflow' },
      { status: 500 }
    );
  }
}
