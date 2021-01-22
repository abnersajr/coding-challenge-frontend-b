import React from 'react'
import styled from 'styled-components'

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 217 73"
    role="img"
    aria-label="Busbud.com"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50.451 22.398L29.541 1.49a5.078 5.078 0 0 0-7.18-.005L1.485 22.362a5.077 5.077 0 0 0 .005 7.18l6.69 6.69 5.18 5.18 6.926 6.926 2.114 2.113c.195.193.406.37.63.529v18.349a3.03 3.03 0 0 0 6.06 0v-16.17a5.538 5.538 0 0 1-3.092 1.109 4.563 4.563 0 0 1-2.968-1.098v-2.19a5.113 5.113 0 0 0 6.55-.523l2.255-2.255 6.79-6.79 4.734-4.735 7.098-7.099a5.077 5.077 0 0 0-.005-7.18z"
      fill="#FBAE17"
    ></path>
    <path
      d="M40.609 24.097c-.151 8.09-6.753 14.57-14.845 14.57s-14.694-6.48-14.845-14.57h3.23a11.745 11.745 0 0 0 11.73 11.15 11.745 11.745 0 0 0 11.73-11.15h3zM29.089 50.881a5.074 5.074 0 0 1-6.06.1v2.189a4.564 4.564 0 0 0 2.967 1.098 5.54 5.54 0 0 0 3.093-1.11v-2.276z"
      fill="#E88623"
    ></path>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M209.078 53.908a7.92 7.92 0 0 1-7.295 4.631v.001s-9.536 1.252-9.536-14.07c0-9.33 3.099-15.465 9.69-15.465 4.618 0 7.15 3.694 7.151 4.37l-.01-16.36h6.594v40.896h-6.594v-4.003zm-.011-10.307c0-9.971-4.928-9.466-4.928-9.466s-4.951-1.19-4.951 9.603 5.077 9.742 5.077 9.742 4.802.091 4.802-9.88z"
      ></path>
      <path d="M173.261 58.522a8.666 8.666 0 0 0 8.498-6.037v5.428h6.59V29.687h-6.586v12.267c0 5.1-2.562 10.428-6.701 10.428-3.019 0-2.852-6.014-2.852-6.014V29.687h-6.557v19.368c0 3.104.765 9.467 7.608 9.467z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M161.655 43.72c0 10.937-4.448 14.819-11.866 14.82-7.418 0-11.847-4.375-11.847-12.47V17h6.599v16.23a8.273 8.273 0 0 1 7.464-4.243c5.44 0 9.65 3.794 9.65 14.732zm-6.989-.257c0-8.781-2.47-10.29-4.867-10.246-2.725 0-5.332 3.431-5.332 10.42 0 6.988 1.326 10.438 5.332 10.438 2.588 0 4.867-1.83 4.867-10.612zM86.714 43.72c0 10.937-4.449 14.82-11.867 14.82C67.43 58.54 63 54.164 63 46.07V17h6.599v16.23a8.274 8.274 0 0 1 7.464-4.243c5.44 0 9.65 3.794 9.65 14.732zm-6.99-.257c0-8.781-2.47-10.29-4.868-10.246-2.724 0-5.331 3.431-5.331 10.42 0 6.988 1.326 10.438 5.331 10.438 2.588 0 4.868-1.83 4.868-10.612z"
      ></path>
      <path d="M98.345 58.522a8.668 8.668 0 0 0 8.498-6.037v5.428h6.589V29.687h-6.586v12.267c0 5.1-2.561 10.428-6.7 10.428-3.019 0-2.853-6.014-2.853-6.014V29.687h-6.557v19.368c0 3.104.765 9.467 7.609 9.467zM135.359 50.089c0-7.655-12.369-10.644-12.369-13.876 0-1.409 2.552-2.502 4.471-2.502 2.721 0 6.148 1.968 6.148 1.968v-5.565a23.75 23.75 0 0 0-6.27-1.119c-2.43 0-10.158.73-10.158 8.215 0 7.678 12.102 10.691 12.102 13.852 0 1.215-1.191 2.405-5.103 2.405a16.361 16.361 0 0 1-7.096-1.75v5.638a24.19 24.19 0 0 0 7.582 1.167c4.398 0 10.693-1.386 10.693-8.433"></path>
    </g>
  </svg>
)

const StyledLogo = styled(Logo)`
  color: ${(props) => props.theme.colors.blue};
`
export default StyledLogo
