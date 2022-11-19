import { useRouter } from "next/router";

export default function Custom404Page() {
  const router = useRouter();

  return (
    <div className="bg-dark flex flex-col justify-center items-center text-center h-screen text-gray-300">
      <div>
        <h1
          style={{
            display: "inline-block",
            borderRight: "1px solid rgba(255, 255, 255, 1)",
            margin: 0,
            marginRight: "20px",
            padding: "10px 23px 10px 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
          }}
        >
          404
        </h1>
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            verticalAlign: "middle",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "inherit",
              margin: 0,
              padding: 0,
            }}
          >
            This page could not be found.
          </h2>
        </div>
      </div>
      <div>
        <button
          className="mt-8 bg-blue-300 rounded text-black p-2"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
