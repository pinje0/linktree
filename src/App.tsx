import "./App.css"
import "node-snackbar/dist/snackbar.min.css"
import Snackbar from "node-snackbar"
import React, { useState } from "react"

const copyToClipboard = (event: React.MouseEvent, text: string) => {
    event.preventDefault()
    navigator.clipboard
        .writeText(text)
        .then(() => {
            Snackbar.show({
                text: "📋Copied to Clipboard",
                pos: "bottom-right",
                duration: 1500,
            })
        })
        .catch((err) => {
            console.error("Failed to copy: ", err)
        })
}

function App() {
    const [language, setLanguage] = useState<"en" | "jp">("en") // State for language selection

    // Function to toggle the language between English and Japanese
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "jp" : "en"))
    }

    // Social media link names based on language
    const socialLinks = {
        instagram: {
            en: "Instagram",
            jp: "インスタグラム",
        },
        github: {
            en: "GitHub",
            jp: "ギットハブ",
        },
        steam: {
            en: "Steam",
            jp: "スチーム",
        },
        spotify: {
            en: "Spotify",
            jp: "スポティファイ",
        },
    }
    return (
        <div className="body">
            <header>
                <button className="toggle-language" onClick={toggleLanguage} aria-label="Toggle Language">
                    {language === "en" ? "日本語" : "English"}
                </button>
                {/* <!--* Share button  --> */}
                <a
                    href="https://pinje0.github.io/linktree/"
                    onClick={(event) => copyToClipboard(event, "https://pinje0.github.io/linktree/")}
                    aria-label="Share Linktree URL"
                >
                    <div className="share-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
                            <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
                        </svg>
                    </div>
                </a>
            </header>
            <div className="container">
                <div className="image-container">
                    <img src="/static/images/pinje.jpeg" alt="" />
                </div>
                <h1>@pinje</h1>

                {/* <!--* Instagram --> */}
                <a className="tile" href="https://www.instagram.com/pinje__/" target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                style={{ fill: "#ffffff" }}
                            />
                        </svg>
                    </div>
                    <p>{language === "en" ? socialLinks.instagram.en : socialLinks.instagram.jp}</p>
                    <a
                        href="https://www.instagram.com/pinje__"
                        onClick={(event) => copyToClipboard(event, "https://www.instagram.com/pinje__")}
                    >
                        <div className="tile-share-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
                                <path
                                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                                    style={{ fill: "#ffffff" }}
                                />
                            </svg>
                        </div>
                    </a>
                </a>

                {/* <!--* GitHub  --> */}
                <a className="tile" href="https://github.com/pinje0" target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 496 512">
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                style={{ fill: "#ffffff" }}
                            />
                        </svg>
                    </div>
                    <p>{language == "en" ? socialLinks.github.en : socialLinks.github.jp}</p>
                    <a href="https://github.com/pinje0" onClick={(event) => copyToClipboard(event, "https://github.com/pinje0")}>
                        <div className="tile-share-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
                                <path
                                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                                    style={{ fill: "#ffffff" }}
                                />
                            </svg>
                        </div>
                    </a>
                </a>

                {/* <!--* Steam  --> */}
                <a className="tile" href="https://steamcommunity.com/id/kyotorainn" target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 496 512">
                            <path
                                d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
                                style={{ fill: "#ffffff" }}
                            />
                        </svg>
                    </div>
                    <p>{language == "en" ? socialLinks.steam.en : socialLinks.steam.jp}</p>
                    <a
                        href="https://steamcommunity.com/id/kyotorainn/"
                        onClick={(event) => copyToClipboard(event, "https://steamcommunity.com/id/kyotorainn/")}
                    >
                        <div className="tile-share-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
                                <path
                                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                                    style={{ fill: "#ffffff" }}
                                />
                            </svg>
                        </div>
                    </a>
                </a>

                {/* <!--* Spotify  --> */}
                <a
                    className="tile"
                    href="https://open.spotify.com/user/21mxjp3gplpyos5ef7ung3iwq?si=e82e8feab08e4bfc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 496 512">
                            <path
                                d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                style={{ fill: "#ffffff" }}
                            />
                        </svg>
                    </div>
                    <p>{language == "en" ? socialLinks.spotify.en : socialLinks.spotify.jp}</p>
                    <a
                        href="https://open.spotify.com/user/21mxjp3gplpyos5ef7ung3iwq?si=e82e8feab08e4bfc"
                        onClick={(event) =>
                            copyToClipboard(event, "https://open.spotify.com/user/21mxjp3gplpyos5ef7ung3iwq?si=e82e8feab08e4bfc")
                        }
                    >
                        <div className="tile-share-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512">
                                <path
                                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                                    style={{ fill: "#ffffff" }}
                                />
                            </svg>
                        </div>
                    </a>
                </a>
            </div>
            <p className="text-center text-xs font-medium text-slate-500 footer-p">
                &#169;2024{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/pinje__/"
                    className="transition duration-500 hover:brightness-125"
                >
                    pinje
                </a>{" "}
                |{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/yu._rak/"
                    className="transition duration-500 hover:brightness-125"
                >
                    ユラク
                </a>
            </p>
        </div>
    )
}

export default App
