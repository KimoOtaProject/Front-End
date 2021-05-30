import Image from "next/image";
import {Switch} from "antd";

function Header() {
	const handleThemeSwitch = (checked:boolean) => {
		if (checked) {
			document.documentElement.setAttribute('color-theme', 'dark');
		} else {
			document.documentElement.setAttribute('color-theme', 'light');
		}
	}
	const uncheckedIcon = (
		<div className="image-wrapper">
			<Image src="/light-mode.svg" alt="" width={18} height={18} />
		</div>
	);
	const checkedIcon = (
		<div className="image-wrapper">
			<Image src="/dark-mode.svg" alt="" width={18} height={18} />
		</div>
	);
	return (
		<header>
			<Switch
				onChange={handleThemeSwitch}
				unCheckedChildren={uncheckedIcon}
				checkedChildren={checkedIcon}
			/>
		</header>
	);
}

function NavBar() {
	return (
		<nav>
			nav
		</nav>
	);
}

function Footer() {
	return (
		<footer>
			footer
		</footer>
	);
}

const Layout = {
	Header,
	NavBar,
	Footer,
}

export {Header, NavBar, Footer};
export default Layout;
