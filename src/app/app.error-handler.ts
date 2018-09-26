//import { Response } from '@angular/http'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler {
	static handleError(error: HttpErrorResponse | any) {
		let errorMessage: string
		const body = error.error
		if(error instanceof HttpErrorResponse) {
			errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} ${body}`
		} else {
			errorMessage = error.toString()
		}

		console.log(errorMessage)
		return Observable.throw(errorMessage)
	}

	/*
	static handleError(error: Response | any) {
		let errorMessage: string
		if(error instanceof Response) {
			errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
		} else {
			errorMessage = error.toString()
		}

		console.log(errorMessage)
		return Observable.throw(errorMessage)
	}
	*/
}
