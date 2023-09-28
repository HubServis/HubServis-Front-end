import React from 'react';
import { AppBar } from '../../../components';
import { Clock, Users } from '@phosphor-icons/react';

const CreateAgendamento = () => {
    return (
			<>
				<AppBar>
					<a href="/about">Sobre</a>
					<a href="/plans">Planos</a>
					<a href="/annuncement">Anuncios e eventos</a>
				</AppBar>

				<main className='w-full max-w-[1110px] m-auto'>
					<h2 className="text-xl  text-[var(--gray-opacity-50)] font-semibold mt-[60px] mb-10">
						Agende seu serviço
					</h2>
					<header>
						<header>
							<section className="flex gap-3">
								<div className="mr-[10px] bg-[var(--dark-green)] w-[8px] h-[80px] rounded-[10px]" />
								<div>
									<p className='mb-4 text-[var(--dark-green)] font-semibold text-lg'>Semanalmente</p>
									<p className='font-semibold text-2xl'>Corte de Cabelo</p>
								</div>
							</section>
							<section className='mt-[52px]'>
								<div>
									<p className='font-semibold text-lg'>Detalhes</p>
									<div>
										<span>
											<Users size={28} className='text-[var(--gray-opacity-50)]'/>
											<p>Clientes - 1 por vez</p>
										</span>

										<span>
											<Clock size={28} className='text-[var(--gray-opacity-50)]'/>
											<p>Tempo - 1 Hora</p>
										</span>
									</div>
								</div>

								<div>
									<h2>Dias de trabalho</h2>
									<p className="rounded-[4px] bg-[var(--gray-opacity-75)] text-[var(--gray-opacity-50)] px-2 py-1 inline-block">
										Segunda à Sábado
									</p>
								</div>
							</section>
						</header>
					</header>
				</main>
			</>
		);
}
 
export default CreateAgendamento;