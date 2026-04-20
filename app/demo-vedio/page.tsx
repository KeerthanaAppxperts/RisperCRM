"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function ShopArchivePage() {
  const [open, setOpen] = useState(false);

  // ✅ Prevent background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <Layout headerStyle={2} footerStyle={1}>
      {/* 🔹 Thumbnail Image */}
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "relative",
          cursor: "pointer",
          maxWidth: "900px",
          margin: "80px auto",
        }}
      >
        <Image
          src="/assets/imgs/pages/VedioImage.jpeg" // ✅ use correct path
          alt="Video Thumbnail"
          width={900}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
        />

        {/* ▶ Play Button */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            borderRadius: "50%",
            padding: "18px 22px",
            fontSize: "24px",
          }}
        >
          ▶
        </div>
      </div>

      {/* 🔹 Modal Popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999, // ✅ above header
            padding: "20px",
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "900px",
              position: "relative",
              marginTop: "40px",
            }}
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "-45px",
                right: "0",
                background: "#fff",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              ✕
            </button>

            {/* 🎥 Responsive Video */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 ratio
                borderRadius: "12px",
                overflow: "auto",
              }}
            >
              {open && (
                <iframe
                  src="https://www.youtube.com/embed/CWmvoOtbytA?autoplay=1&mute=1"
                  title="YouTube video"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
