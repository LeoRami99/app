import React from "react";

type LayoutProps = {
	children: React.ReactNode;
};

const LayoutAbout = (props: LayoutProps) => {
	return <div className="p-96">{props.children}</div>;
};

export default LayoutAbout;
