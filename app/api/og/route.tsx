import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Antonio Archer — Project'
  const subtitle = searchParams.get('subtitle') || ''
  const image = searchParams.get('image') || ''

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#0B1220',
          color: 'white',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            width={1200}
            height={630}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.2,
            }}
          />
        )}
        <div style={{ padding: 64 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
          {subtitle && (
            <div style={{ marginTop: 8, fontSize: 28, color: '#C7D2FE' }}>{subtitle}</div>
          )}
          <div style={{ marginTop: 24, fontSize: 20, color: '#94A3B8' }}>antonioarcher.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
