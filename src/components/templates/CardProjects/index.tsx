import { CardProject } from 'components/organisms/CardProject';
import { useProjects } from 'hooks/useProjects';

export const CardProjects = () => {
	const { projects } = useProjects();

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 md:items-stretch gap-10 p-10">
			{projects.map((project, index) => (
				<CardProject key={index} {...project} />
			))}
		</div>
	);
};
