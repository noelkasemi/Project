import React from "react";

export default function BlackCard({style}) {
  return (
    <svg className={`${style}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM48.13 96c0-8.838 7.164-16 16-16h447.8c8.836 0 16 7.162 16 16v32H48.13V96zM527.9 416c0 8.836-7.164 16-16 16H64.13c-8.836 0-16-7.164-16-16L48 224h480l-.1 192zM120 384h48c13.25 0 23.1-10.75 23.1-24s-9.8-24-23.1-24h-48c-13.2 0-24 10.8-24 24s10.8 24 24 24zm128 0h112c13.25 0 24-10.75 24-24 0-13.26-10.75-24-24-24H248c-13.3 0-24 10.7-24 24s10.7 24 24 24z"></path>
    </svg>
  );
}

