import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileCardProps } from '@/lib/types';

const ProfileCard = ({ card_details }: ProfileCardProps) => {
	const { name, image, description, designation } = card_details;
	return (
		<Card className='flex flex-col h-full shadow-none border-0'>
			<CardHeader className='p-6 flex flex-col items-center text-center gap-2'>
				<div className='relative size-72 mb-6'>
					<img
						src={image}
						alt={name}
						className='rounded-full object-cover w-full h-full'
					/>
				</div>
				<CardTitle className='text-2xl font-bold'>{name}</CardTitle>
				<CardDescription className='mt-2 text-lg font-bold text-blue-800 text-nowrap'>{designation}</CardDescription>
			</CardHeader>
			<CardContent className='text-justify text-gray-500 text-sm text-ellipsis'>
				<p className='leading-relaxed'>{description}</p>
			</CardContent>
		</Card>
	);
};

export default ProfileCard;
