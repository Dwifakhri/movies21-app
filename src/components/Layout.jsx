import React, { useContext, useState } from "react"
import { useNavigate, NavLink, useLocation } from "react-router-dom"
import { WithRouter } from "utils/Navigation"
import { ThemeContext } from "utils/context"

const Layout = ({ children }) => {
  const navigate = useNavigate()
  const path = useLocation().pathname
  const { isLight, setIsLight } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="relative w-full h-screen overflow-auto text-white font-bold dark:bg-black">
      <nav className="w-full h-100 md:h-32 lg:h-20 bg-gray-800 flex flex-col justify-between md:px-5 px-5 md:flex-row top-0 sticky z-10">
        <div
          className={`flex ${
            isMenuOpen ? "flex-col" : "flex-row"
          } md:flex-row md:space-x-5 ${
            isMenuOpen ? "items-start" : "items-center"
          } md:items-center text-xl w-full justify-between relative`}>
          <NavLink to="/">
            <span className="text-4xl text-cyan-400 italic h-20 flex justify-center items-center md:px-3 px-3">
              MOVIES21
            </span>
          </NavLink>
          <button
            className={`md:hidden text-white ${
              isMenuOpen ? "absolute top-6 right-0" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div
            className={`flex-col md:flex-row md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:space-x-5 mt-5 md:mt-0 w-full md:w-auto`}>
            <NavLink to="/">
              <li
                className={`hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-start md:justify-center items-center md:items-start lg:items-center px-3 ${
                  path === "/" ? "bg-sky-900" : ""
                } `}>
                NOW PLAYING
              </li>
            </NavLink>
            <NavLink
              to="/favorites"
              className={`${path === "/favorites" ? "bg-sky-900" : ""}`}>
              <li
                className={`hover:bg-sky-900 h-10 md:h-12 lg:h-20 flex justify-start md:justify-center items-center md:items-start lg:items-center px-3 ${
                  path === "/favorites" ? "bg-sky-900" : ""
                } `}>
                FAVORITES
              </li>
            </NavLink>
            <li className="hover:cursor-not-allowed h-10 md:h-12 lg:h-20 flex justify-start md:justify-center items-center md:items-start lg:items-center px-3">
              18+
            </li>
            <div className="flex flex-row justify-start md:justify-center items-center text-xl mb-5 mt-5 md:mb-0 ml-4 md:ml-0 md:mt-0">
              <button
                className="text-black w-10 h-10 bg-slate-400 dark:bg-white rounded-full flex justify-center items-center mr-3"
                onClick={() => setIsLight(!isLight)}>
                <span>
                  {!isLight ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="black"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <form onSubmit={(e) => navigate(`/search/${searchValue}`)}>
                <div>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search Film..."
                    className="px-5 font-normal text-gray-600 dark:text-white h-10 w-full dark:bg-black rounded-lg"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default WithRouter(Layout)
