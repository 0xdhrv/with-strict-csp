import { headers } from "next/headers";
import Script from "next/script";

export default function Page() {
  const nonce = headers().get("x-nonce");

  return 
    (<>
      Hello
      <Script src="https://..." strategy="afterInteractive" nonce={nonce} />
    </>);
}
