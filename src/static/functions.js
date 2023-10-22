import Swal from "sweetalert2";
import { currencies } from './data.js';

const getRandomCardNumber = () => {
		let cardNumber = [5];

		for (let i = 2; i < 20; i++) {
				if (i % 5 === 0 && i !== 0) {
						cardNumber.push(' ');
						continue;
				}

				cardNumber.push(Math.round(Math.random() * 9));
		}

		return cardNumber.join('');
};

const getCardDate = () => {
		const localDate = new Date(Date.now()).toLocaleDateString();
		const cardPeriod = 5;

		const month = localDate.split('.')[1];
		const year = (parseInt(localDate.split('.')[2]) + cardPeriod) % 100;

		return `${month}/${year}`;
};

const convertDate = (date) => {
		const [day, month, year] = date.split(' ')[0].split('.');
		const time = date.split(' ')[1];

		return `${year}-${month}-${day} ${time}`;
};


const getDate = () => {
		let datetime = new Date(Date.now()).toLocaleString().split(', ');

		const time = `${datetime[1].split(':')[0]}:${datetime[1].split(':')[1]}`;
		const date = datetime[0];

		return `${date} ${time}`;
};

const notification = (message, type = 'error') => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
			},
		});
	
		Toast.fire({
			icon: type,
			text: message,
		});
}

const convertCurrencyfromRUB = (sum, currency) => {
	const newSum = (sum / currencies[currency]).toFixed(1)

    return `${newSum}` 
}

const getDefaultDates = () => {
	const d = new Date()

	return [
		new Date(d.setMonth(d.getMonth() - 1)),
		new Date()
	]
}

const getDataByCategory = (state, category) => {
	let result = 0

	for(const operation of state){
		if(operation.category === category){
			const sum = `${operation.operation}${operation.sum}` 
			result += parseInt(sum)
		}
	}

	return result;
}

const getUsedData = (state, categories) => {
	const result = []

	for(let category of categories){
		result.push(getDataByCategory(state, category))
	}

	return result
}

const formatCategoriesNames = (categories) => {
	const result = []

	for(let category of categories){

		category = category[0].toUpperCase() + category.slice(1)

		category = category.split('_').join(' ')
		
		result.push(category)
	}

	return result
}

const getUsedCategories = (state) => {
	const result = []

	for(let operation of state){
		if(!result.includes(operation.category)){
			result.push(operation.category)
		}
	}

	return result
}

const getUsedColors = (categories, usedCategories) => {
	const result = []

	for(const category of usedCategories){
		result.push(categories[category].color)
	}

	return result
}

export {
	getCardDate,
	getRandomCardNumber,
	convertDate,
	getDate,
	notification,
	convertCurrencyfromRUB,
	getDefaultDates,
	formatCategoriesNames,
	getUsedCategories,
	getUsedData,
	getUsedColors
}