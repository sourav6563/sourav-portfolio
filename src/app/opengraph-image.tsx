import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Sourav Mahato | Software Developer'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >

          <img
            src="https://souravmahato.in/profile.png"
            alt="Profile"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              border: '4px solid #3f3f46',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            backgroundImage: 'linear-gradient(to right, #ffffff, #a1a1aa)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Sourav Mahato
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            fontWeight: 500,
          }}
        >
          Full-Stack Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
