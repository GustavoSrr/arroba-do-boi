import "./style.css";

export default function Header() {
  return (
    <header>
      <h1>
        <span>@</span> do{" "}
        <svg
          width="30"
          height="30"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M33.912 14.37C33.588 12.602 31.976 11 30 11H8.99998C7.99998 11 3.67498 11.035 2.99998 13L0.690975 19.305C0.0159755 21.27 0.999975 24.087 3.02698 24.087C4.17698 24.087 5.62298 24.059 7.02498 24.035C10.016 28.046 12.898 36 14 36C14.849 36 15.572 32.586 15.862 30H27.112C27.346 32.528 27.955 36 29 36C29.954 36 31.977 31.699 33.136 25.083C33.567 23.182 33.862 20.665 33.96 17.436C33.984 17.608 34 17.792 34 18V27C34 27.553 34.447 28 35 28C35.553 28 36 27.553 36 27V18C36 16.193 35.251 14.947 33.912 14.37Z"
              fill="#C1694F"
            />
            <path
              d="M10 12C8 14 5.209 11 3 11C0.791 11 0 10.566 0 10.031C0 9.49601 1.791 9.06201 4 9.06201C6.209 9.06201 12 10 10 12Z"
              fill="#CCD6DD"
            />
            <path
              d="M6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17Z"
              fill="#292F33"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </h1>
    </header>
  );
}
