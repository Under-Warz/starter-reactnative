// import vendors
import { create } from 'apisauce';

// import classes
import Config from './Config';

const api = create({
  baseURL: Config.api.host
});

/*export const sample = (data) => {
	return api
		.post('/authentication', {
			email: data.email,
			password: data.password
		})
		.then((res) => {
			if (res.ok) {
				return res.data;
			}
			else {
				return Promise.reject(res);
			}
		});
}*/