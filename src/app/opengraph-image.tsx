import { ImageResponse } from 'next/og'

export const alt = 'Enpower sh.p.k — Zgjidhje Profesionale në Energji Elektrike | Kosovë'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: '#facc15',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            E
          </div>
          <span style={{ color: '#facc15' }}>Enpower sh.p.k</span>
        </div>
        <div style={{ textAlign: 'center', maxWidth: 800, lineHeight: 1.2 }}>
          Zgjidhje Profesionale në Energji Elektrike
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            color: 'rgba(248,250,252,0.8)',
          }}
        >
          Tension i lartë · Tension i mesëm · Ndriçim · Trafostacione · Kosovë
        </div>
      </div>
    ),
    { ...size }
  )
}
