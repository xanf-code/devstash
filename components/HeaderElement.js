import { Switch } from "antd";

function HeaderElement({ onTrigger }) {
    return (
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/iamlardBendtner"
            >
                <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    height="1684"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="-89.009 -46.884 643.937 446.884"
                    width="2500"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-twitter"
                >
                    <path
                        d="M154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052A205.304 205.304 0 00492 47.346c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 01-64.098 24.511C395.903 12.276 369.679 0 340.641 0c-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504A100.739 100.739 0 0020.57 69.24c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 01-45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 01-26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224A204.9 204.9 0 010 354.634c44.674 28.645 97.72 45.359 154.734 45.359"
                        fill="currentColor"
                        fillRule="nonzero"
                    ></path>
                </svg>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="/resources"
            >
            </a>
            <div className="self-center px-4">
                <Switch onChange={onTrigger} />
            </div>
        </nav>
    )
}

export default HeaderElement
