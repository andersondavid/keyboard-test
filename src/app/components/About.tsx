import React from "react";

export default function About() {
	return (
		<div className="mb-10 mt-20 max-w-screen-lg">
			<h1 className="text-4xl mb-5 font-bold">
				Para que serve o testador de teclado virtual?
			</h1>
			<ul className="list-disc">
				<li>
					<h3 className="text-3xl font-bold font-roboto">
						Testar o funcionamemento
					</h3>
					<p className="text-2xl text-justify m-4 font-roboto">
						Com este teste você pode verificar se alguma tecla do seu teclado
						não está respondendo, se estar com duplo click ou se alguma tecla si
						mantem pressionada.
					</p>
				</li>
				<li>
					<h3 className="text-3xl font-bold font-roboto">Remontar o teclado</h3>
					<p className="text-2xl text-justify m-4 font-roboto">
						Com este teste você pode verificar se alguma tecla do seu teclado
						não está respondendo, se está com duplo clique ou se alguma tecla se
						mantém pressionada.
					</p>
				</li>
			</ul>
		</div>
	);
}
