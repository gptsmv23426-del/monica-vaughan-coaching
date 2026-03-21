import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF8F3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Sienna border accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: '#B0714E' }} />

        {/* Plumb line graphic */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px' }}>
          <div style={{ width: '3px', height: '56px', background: '#B0714E', borderRadius: '2px' }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '20px solid #B0714E',
            }}
          />
        </div>

        {/* Eyebrow */}
        <div
          style={{
            color: '#B0714E',
            fontSize: '16px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            marginBottom: '20px',
          }}
        >
          Monica Vaughan · Certified LifePlan Guide
        </div>

        {/* Main title */}
        <div
          style={{
            color: '#2A1C11',
            fontSize: '80px',
            fontWeight: 700,
            fontFamily: 'serif',
            marginBottom: '28px',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          The Plumb Line
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#5C4033',
            fontSize: '26px',
            fontFamily: 'sans-serif',
            fontWeight: 300,
            letterSpacing: '0.08em',
          }}
        >
          Clarity. Direction. Purpose.
        </div>

        {/* Bottom sienna line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: '#B0714E' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
