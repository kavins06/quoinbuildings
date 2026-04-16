import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0F0F",
          borderRadius: "20%",
        }}
      >
        <div
          style={{
            width: "65%",
            height: "65%",
            borderRadius: "50%",
            border: "3.5px solid #C4A97D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#C4A97D",
              fontSize: 72,
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Q
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
