"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loadError, setLoadError] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let animationFrameId: number
    const particles: {
      mesh: THREE.Mesh
      rotationSpeed: { x: number; y: number; z: number }
      originalPosition: THREE.Vector3
      pulseSpeed: number
      pulseAmount: number
      timeOffset: number
    }[] = []

    const initThree = async () => {
      try {
        // Create scene
        scene = new THREE.Scene()

        // Set background color to white by default
        scene.background = new THREE.Color("#ffffff")

        // Create camera
        camera = new THREE.PerspectiveCamera(
          75,
          containerRef.current!.clientWidth / containerRef.current!.clientHeight,
          0.1,
          1000,
        )
        camera.position.z = 30

        // Create renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        containerRef.current!.appendChild(renderer.domElement)

        // Create particles
        const particleCount = 200
        const colors = [
          new THREE.Color("#ff6b6b"), // primary
          new THREE.Color("#ffd166"), // secondary
          new THREE.Color("#06d6a0"), // accent
        ]

        for (let i = 0; i < particleCount; i++) {
          // Create code-like shapes
          let geometry
          const shapeType = Math.floor(Math.random() * 4)

          switch (shapeType) {
            case 0: // Cube for code blocks
              geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
              break
            case 1: // Sphere for dots
              geometry = new THREE.SphereGeometry(0.2, 8, 8)
              break
            case 2: // Torus for loops
              geometry = new THREE.TorusGeometry(0.3, 0.1, 8, 16)
              break
            case 3: // Cylinder for brackets
              geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8)
              break
          }

          // Create material with random color from our palette
          const colorIndex = Math.floor(Math.random() * colors.length)
          const material = new THREE.MeshBasicMaterial({
            color: colors[colorIndex],
            wireframe: Math.random() > 0.5,
          })

          // Create mesh
          const particle = new THREE.Mesh(geometry, material)

          // Position randomly in a sphere
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          const radius = 15 + Math.random() * 15

          particle.position.x = radius * Math.sin(phi) * Math.cos(theta)
          particle.position.y = radius * Math.sin(phi) * Math.sin(theta)
          particle.position.z = radius * Math.cos(phi)

          // Random rotation
          particle.rotation.x = Math.random() * Math.PI
          particle.rotation.y = Math.random() * Math.PI
          particle.rotation.z = Math.random() * Math.PI

          // Random scale
          const scale = 0.5 + Math.random() * 1.5
          particle.scale.set(scale, scale, scale)

          // Add to scene
          scene.add(particle)
          particles.push({
            mesh: particle,
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.01,
              y: (Math.random() - 0.5) * 0.01,
              z: (Math.random() - 0.5) * 0.01,
            },
            originalPosition: new THREE.Vector3(
              particle.position.x,
              particle.position.y,
              particle.position.z,
            ),
            pulseSpeed: 0.5 + Math.random() * 2,
            pulseAmount: 0.1 + Math.random() * 0.3,
            timeOffset: Math.random() * Math.PI * 2,
          })
        }

        // Add comic-style text elements
        const createTextSprite = (text: string, position: THREE.Vector3, color: string, size = 5) => {
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")
          if (!context) return

          canvas.width = 256
          canvas.height = 128

          // Draw comic-style bubble
          context.fillStyle = color
          context.beginPath()
          context.ellipse(128, 64, 120, 60, 0, 0, 2 * Math.PI)
          context.fill()

          context.strokeStyle = "#000"
          context.lineWidth = 5
          context.beginPath()
          context.ellipse(128, 64, 120, 60, 0, 0, 2 * Math.PI)
          context.stroke()

          // Draw text
          context.font = "bold 60px Bangers, sans-serif"
          context.textAlign = "center"
          context.textBaseline = "middle"
          context.fillStyle = "#fff"
          context.fillText(text, 128, 64)

          const texture = new THREE.CanvasTexture(canvas)
          const material = new THREE.SpriteMaterial({ map: texture })
          const sprite = new THREE.Sprite(material)
          sprite.position.copy(position)
          sprite.scale.set(size, size / 2, 1)
          scene.add(sprite)

          return sprite
        }

        // Add comic-style text bubbles
        const codeTexts = [
          { text: "</>", position: new THREE.Vector3(10, 8, -5), color: "#ffd166" },
          { text: "{ }", position: new THREE.Vector3(-12, -7, 0), color: "#ff6b6b" },
          { text: "( )", position: new THREE.Vector3(5, -10, 5), color: "#06d6a0" },
          { text: "< />", position: new THREE.Vector3(-8, 12, -8), color: "#ff6b6b" },
        ]

        const textSprites = codeTexts.map((item) => createTextSprite(item.text, item.position, item.color))

        // Set up camera auto-rotation
        let cameraAngle = 0
        const cameraRadius = 35
        const cameraSpeed = 0.0005

        // Animation function
        const animate = () => {
          // Update particles
          const time = Date.now() * 0.001

          particles.forEach((particle) => {
            // Rotate
            particle.mesh.rotation.x += particle.rotationSpeed.x
            particle.mesh.rotation.y += particle.rotationSpeed.y
            particle.mesh.rotation.z += particle.rotationSpeed.z

            // Pulse movement
            const pulse = Math.sin(time * particle.pulseSpeed + particle.timeOffset) * particle.pulseAmount
            particle.mesh.position.x = particle.originalPosition.x * (1 + pulse)
            particle.mesh.position.y = particle.originalPosition.y * (1 + pulse)
            particle.mesh.position.z = particle.originalPosition.z * (1 + pulse)
          })

          // Rotate camera around the scene
          cameraAngle += cameraSpeed
          camera.position.x = cameraRadius * Math.sin(cameraAngle)
          camera.position.z = cameraRadius * Math.cos(cameraAngle)
          camera.lookAt(0, 0, 0)

          // Render
          renderer.render(scene, camera)

          // Continue animation loop
          animationFrameId = requestAnimationFrame(animate)
        }

        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return

          camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
        }

        window.addEventListener("resize", handleResize)

        // Start animation
        animate()

        setLoadError(false)

        // Cleanup function
        return () => {
          window.removeEventListener("resize", handleResize)
          cancelAnimationFrame(animationFrameId)

          const containerElement = containerRef.current
          if (containerElement && renderer) {
            containerElement.removeChild(renderer.domElement)
          }

          // Dispose of geometries and materials
          particles.forEach((particle) => {
            particle.mesh.geometry.dispose()
            if (Array.isArray(particle.mesh.material)) {
              particle.mesh.material.forEach((material) => material.dispose())
            } else {
              particle.mesh.material.dispose()
            }
          })

          textSprites.forEach((sprite) => {
            if (sprite) {
              sprite.material.map?.dispose()
              sprite.material.dispose()
            }
          })

          renderer.dispose()
        }
      } catch (error) {
        console.error("Error initializing Three.js:", error)
        setLoadError(true)
      }
    }

    initThree()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      const containerElement = containerRef.current
      if (containerElement && renderer) {
        try {
          containerElement.removeChild(renderer.domElement)
        } catch (e) {
          console.error("Error cleaning up Three.js:", e)
        }
      }
    }
  }, [isDarkMode])

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10" aria-hidden="true">
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Could not load 3D background</div>
        </div>
      )}
    </div>
  )
}
