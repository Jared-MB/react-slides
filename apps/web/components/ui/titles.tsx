export function H1({ children }: { children: React.ReactNode }) {
	return <h1>{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
	return <h2 className="text-4xl font-bold font-mono">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
	return <h3 className="text-2xl font-bold font-mono">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
	return <h4 className="text-xl font-bold font-mono">{children}</h4>;
}

export function H5({ children }: { children: React.ReactNode }) {
	return <h5 className="text-lg font-bold font-mono">{children}</h5>;
}

export default {
	H1,
	H2,
	H3,
	H4,
};
