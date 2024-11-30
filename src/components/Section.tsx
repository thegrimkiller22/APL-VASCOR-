import { SectionProps } from '@/lib/types';
import { cn, toTitleCase } from '@/lib/utils';

const Section: React.FC<SectionProps> = ({ title, heading, className, children }) => {
	return (
        <section className={cn('container mx-auto my-8 mt-16 p-4 bg-gray-50 dark:bg-gray-800 rounded-md', className)}>
			{/* Header */}
			<div className='text-center mb-12'>
				<div className='flex items-center justify-center gap-4 mb-6'>
					<div className='h-0.5 w-16 bg-blue-600'></div>
					<h2 className='text-blue-600 text-xl font-semibold'>{toTitleCase(title)}</h2>
					<div className='h-0.5 w-16 bg-blue-600'></div>
				</div>
				<h1 className='text-4xl md:text-5xl font-bold text-gray-900'>{toTitleCase(heading)}</h1>
			</div>
			<div className='text-gray-700 dark:text-gray-300'>{children}</div>
		</section>
	);
};

export default Section;
