export type Profile = {
	image: string;
	name: string;
	designation: string;
	description: string;
};

export type ProfileCardProps = {
	card_details: Profile;
};

export type SectionProps = {
	title: string;
	heading: string;
	children: React.ReactNode;
	className?: string | undefined;
};
