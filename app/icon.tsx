import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
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
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            border: "2.5px solid #C4A97D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#C4A97D",
              fontSize: 28,
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
