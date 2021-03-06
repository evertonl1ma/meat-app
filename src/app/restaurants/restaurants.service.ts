import { Injectable } from '@angular/core'
//import { Http } from '@angular/http'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'
import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class RestaurantsService {
	constructor(private http: HttpClient) {}

	// Tipo Restauran(definido pela interface), poderia ser any aqui tbm, caso eu não tivesse feito a interface

	restaurants(search?: string): Observable<Restaurant[]> {
		let params: HttpParams = undefined
		if(search) {
			params = new HttpParams().set('q', search)
		//	params = new HttpParams().append('q', search)
		}

		return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
		//.map(response => response.json())
		//.catch(ErrorHandler.handleError)
	}

	restaurantById(id: string): Observable<Restaurant> {
		return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
			//.map(response => response.json())
			//.catch(ErrorHandler.handleError)
	}

	reviewsOfRestaurant(id: string): Observable<Restaurant> {
		return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
			//.map(response => response.json())
			//.catch(ErrorHandler.handleError)
	}

	menuOfRestaurant(id: string): Observable<MenuItem[]> {
		return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
			//.map(response => response.json())
			//.catch(ErrorHandler.handleError)
	}
}
