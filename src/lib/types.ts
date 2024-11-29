export type Profile = {
	image: string;
	name: string;
	designation: string;
	description: string;
};

export type ProfileCardProps = {
	card_details: Profile;
};
