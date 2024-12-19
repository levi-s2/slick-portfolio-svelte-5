const firstName = 'Joao';
const lastName = 'Vieira';
const suffix = 'Portifolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
