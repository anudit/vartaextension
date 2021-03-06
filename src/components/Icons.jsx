import React from 'react';
import { useTheme } from 'styled-components'

function GlobeIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24">
            <path fill={theme.colors.text} d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
        </svg>
    )
}

function PersonalIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24">
            <path fill={theme.colors.text} d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
        </svg>
    )
}

function ContactsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.6 337.6" width="24" height="24">
            <path d="M338 68V39c0-17-15-31-32-31h-55c-5-3-10-5-17-5H33C15 3 0 17 0 35v267c0 18 15 33 33 33h201c7 0 12-2 17-5h55c17 0 32-14 32-32v-28c0-10-5-19-12-24 7-6 12-15 12-25v-28c0-10-5-18-12-24 7-6 12-15 12-24v-29c0-10-5-18-12-24 7-6 12-15 12-24zm-86 234c0 10-8 18-18 18H33c-10 0-18-8-18-18V35c0-9 8-17 18-17h201c10 0 18 8 18 17v267zm71-4c0 9-8 17-17 17h-42c2-4 3-8 3-13v-49h39c9 0 17 8 17 17v28zm0-77c0 10-8 17-17 17h-39v-62h39c9 0 17 8 17 17v28zm0-76c0 9-8 16-17 16h-39V99h39c9 0 17 8 17 17v29zm0-77c0 9-8 16-17 16h-39V35l-3-12h42c9 0 17 7 17 16v29z" />
            <path d="M40 230h186v15H40zm27-24h133a7 7 0 0 0 7-9c-3-17-13-32-26-43a61 61 0 0 0-48-99 61 61 0 0 0-47 99 76 76 0 0 0-26 43 7 7 0 0 0 7 9zm34-44a7 7 0 0 0 1-12 46 46 0 0 1 31-80 46 46 0 0 1 31 80 8 8 0 0 0 1 12c12 7 20 17 25 29H77c5-12 13-22 24-29zm-37 98h139v15H64z" />
        </svg>
    )
}

function MoonIcon({ width, height, fill }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302 302" xmlSpace="preserve" height={height} width={width}>
            <path fill={fill} d="M205 98c-14-14-33-23-54-23s-40 9-53 23a72 72 0 0 0-23 53 76 76 0 1 0 130-53zm-54-46c6 0 11-5 11-11V10c0-5-5-10-11-10-5 0-10 5-10 10v31c0 6 5 11 10 11zm85 29 22-22c4-4 4-11 0-15s-10-4-14 0l-22 22c-4 4-4 11 0 15s10 4 14 0zm56 60h-31c-5 0-10 5-10 10 0 6 5 11 10 11h31c6 0 10-5 10-11 0-5-4-10-10-10zm-56 81c-4-4-10-4-14 0s-4 10 0 14l22 22c4 4 10 4 14 0s4-10 0-14l-22-22zm-85 29c-5 0-10 5-10 10v31c0 6 5 10 10 10 6 0 11-4 11-10v-31c0-5-5-10-11-10zm-85-29-22 22c-4 4-4 10 0 14s10 4 14 0l22-22c4-4 4-10 0-14-3-4-10-4-14 0zm-14-71c0-5-5-10-11-10H10c-5 0-10 5-10 10s5 11 10 11h31c6 0 11-5 11-11zm14-70c4 4 10 4 14 0s4-11 0-15L58 44c-4-4-10-4-14 0s-4 11 0 15l22 22z" />
        </svg>
    )
}

function SunIcon({ width, height, fill }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve" height={height} width={width}>
            <path fill={fill} d="M248 264c-31-32-40-77-26-117a111 111 0 0 0-42 185 112 112 0 0 0 185-42c-40 14-85 5-117-26z" />
        </svg>
    )
}


function SettingsIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" height={height} width={width}>
            <path fill={theme.colors.text} d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126" />
        </svg>
    )
}

function ProfileIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" height={height} width={width}>
            <path fill={theme.colors.text} d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
        </svg>
    )
}

function LoginIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 551.13 551.13" height={height} width={width}>
            <path fill={theme.colors.text} d="m499.462 0h-378.902c-9.52 0-17.223 7.703-17.223 17.223v51.668h34.446v-34.445h344.456v482.239h-344.456v-34.446h-34.446v51.668c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-516.684c0-9.52-7.704-17.223-17.223-17.223z"></path>
            <path fill={theme.colors.text} d="m204.588 366.725 24.354 24.354 115.514-115.514-115.514-115.514-24.354 24.354 73.937 73.937h-244.079v34.446h244.08z"></path>
        </svg>
    )
}

function DownArrowIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path fill={theme.colors.text} d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
        </svg>
    )
}

function SendIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 447.243 447.243">
            <path transform="matrix(-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,447.24187278747564,-0.0003528594970703125)" fill={theme.colors.text} d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48    c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754    l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160    c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4    l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88    C449.654,211.494,437.806,195.059,420.361,192.229z" />
        </svg>
    )
}

function MenuIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0" y="0" viewBox="0 0 32 32" xmlSpace="preserve" >
            <g>
                <circle cx="16" cy="8" r="2" fill={theme.colors.text}></circle>
                <circle cx="16" cy="16" r="2" fill={theme.colors.text}></circle>
                <circle cx="16" cy="24" r="2" fill={theme.colors.text}></circle>
            </g>
        </svg>
    )
}

function MetaMaskIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189">
            <g fill="none" fillRule="evenodd">
                <path fill="#CDBDB2" d="M61 173l27 8v-10l3-2h15v19H89l-20-9zM151 173l-27 8v-10l-2-2h-16v19h17l21-9z" />
                <path fill="#393939" d="M91 152l-3 19 3-2h29l4 2-2-19-5-2H95z" />
                <path fill="#F89C35" d="M75 27l14 32 6 91h22l7-91 12-32z" />
                <path fill="#F89D35" d="M16 96L1 142l39-2h25v-20l-1-41-5 5z" />
                <path fill="#D87C30" d="M46 101l46 1-5 24-22-6z" />
                <path fill="#EA8D3A" d="M46 102l19 18v18z" />
                <path fill="#F89D35" d="M65 120l23 6 7 24-5 3-25-15z" />
                <path fill="#EB8F35" d="M65 138l-4 35 30-21z" />
                <path fill="#EA8E3A" d="M92 102l3 48-8-24z" />
                <path fill="#D87C30" d="M39 139l26-1-4 35z" />
                <path fill="#EB8F35" d="M13 188l48-15-22-34-38 3z" />
                <path fill="#E8821E" d="M89 59L65 79l-19 22 46 2z" />
                <path fill="#DFCEC3" d="M61 173l30-21-3 18v11l-20-4zM150 173l-29-21 2 18v11l21-4z" />
                <path fill="#393939" d="M80 113l6 12-22-5z" />
                <path fill="#E88F35" d="M12 1l77 58-13-32z" />
                <path fill="#8E5A30" d="M12 1L2 32l6 33-4 3 6 5-5 4 6 5-4 4 9 11 43-13 30-25L12 1z" />
                <path fill="#F89D35" d="M196 96l15 46-39-2h-25v-20l1-41 5 5z" />
                <path fill="#D87C30" d="M166 101l-46 1 5 24 22-6z" />
                <path fill="#EA8D3A" d="M166 102l-19 18v18z" />
                <path fill="#F89D35" d="M147 120l-23 6-7 24 5 3 25-15z" />
                <path fill="#EB8F35" d="M147 138l4 35-29-20z" />
                <path fill="#EA8E3A" d="M120 102l-3 48 8-24z" />
                <path fill="#D87C30" d="M173 139l-26-1 4 35z" />
                <path fill="#EB8F35" d="M199 188l-48-15 22-34 38 3z" />
                <path fill="#E8821E" d="M123 59l24 20 19 22-46 2z" />
                <path fill="#393939" d="M131 113l-6 12 22-5z" />
                <path fill="#E88F35" d="M200 1l-77 58 13-32z" />
                <path fill="#8E5A30" d="M199 1l10 31-5 33 4 3-6 5 4 4-6 5 4 4-9 11-42-13-30-25 76-58z" />
            </g>
        </svg>
    )
}

function WalletConnectIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-0.25 0 300.5 184.25">
            <path fill="#3B99FC" d="M61 36c49-48 129-48 178 0l5 6c3 2 3 6 0 9l-20 19c-1 2-3 2-4 0l-8-8a89 89 0 00-124 0l-8 9h-5L55 51c-2-2-2-6 0-8l6-7zm219 41l18 18c3 2 3 6 0 8l-81 79c-2 3-6 3-9 0l-57-56h-2l-57 56c-3 3-7 3-9 0L2 103c-3-2-3-6 0-8l18-18c2-2 6-2 9 0l57 56a2 2 0 002 0l58-56a6 6 0 018 0l58 56h2l57-56c3-2 7-2 9 0z" />
        </svg>
    )
}

function ReloadIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24">
            <path fill={theme.colors.text} d="M7 9H0V2h1v5.2A12 12 0 1 1 0 13h1a11 11 0 1 0 .8-5H7v1z" />
        </svg>
    )
}

function AddIcon({ width, height }) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24">
            <path fill={theme.colors.text} d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
        </svg>
    )
}

function VartaIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" height="40px" width="40px">
            <path d="M101.5,155.7c0.4,0.3-10,29.8-9.6,30.1c24.4-14.3,58.8-58.7,87.3-65.1c38.6-10.5,80.3-14.1,118.5,0.4
                c32.1,3.6,78.9,42.6,96.2,94.2c26.9,54.9,8.3,120-35.5,160.1c-106.7,110.5-278.5-41-171.7-153.8c42.9-47.2,134.4-35.4,146.9,32.9
                c3.7,16.5,0.4,32.2-4.4,47.8c-6.6,23.4-38.6,36.5-56.6,17.5c-22.2-13.8-4.8-48.6,18.2-32.9c12.6-29.9-17.2-44.9-42.7-43
                c-33.9,4.4-63.8,47.3-40.8,78.2c22.2,61.7,115.1,49.2,150.8,6.3c27.8-34.3,26.4-85.4,3-121.5c-7.8-9.1-10.6-12.6-18.2-21.8
                c-18.6-25-50.2-31.6-78.9-36.6c-83.1-13.8-159.7,59.1-162.9,142.3c-1.4,43.1,19.5,83.9,49,114.9c73.1,71.6,210.7,59.7,258.3-34.5
                c17.7-35.6,31.3-76,29.6-116.2c-4.4-32.3-7.9-65.4-27.2-92.8C359.6,83.9,251.3,61,168.3,98.9C133.9,115.3,120.9,122,101.5,155.7z"/>
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 12 12" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M 6 5.614 L 11.614 0 L 12 0.385 L 6.385 6 L 12 11.614 L 11.614 12 L 6 6.385 L 0.385 12 L 0 11.614 L 5.614 6 L 0 0.385 L 0.385 0 L 6 5.614 Z" />
        </svg>
    )
}

export { MoonIcon, SunIcon, SettingsIcon, CloseIcon, VartaIcon, AddIcon, ReloadIcon, WalletConnectIcon, GlobeIcon, PersonalIcon, ContactsIcon, SendIcon, MenuIcon, LoginIcon, ProfileIcon, DownArrowIcon, MetaMaskIcon }
