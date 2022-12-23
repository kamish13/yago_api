import { Injectable, Param, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
  constructor(private http: HttpService) {}
  getQuotes(body) {
    const doctor_recommendation = {
      recommendation: {
        deductible: 'small',
        coverageCeiling: 'large',
        covers: ['legal'],
      },
    };
    const medical_codes = ['86210', '86220', '86200'];
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': 'fABF1NGkfn5fpHuJHrbvG3niQX6A1CO53ftF9ASD',
    };
    // body = JSON.stringify(body.body);
    return this.http
      .post(
        'https://staging-gtw.seraphin.be/quotes/professional-liability',
        body,
        { headers: headers },
      )
      .pipe(
        map((response) => {
          if (medical_codes.some((code) => body.nacebelCodes.includes(code))) {
            response.data.data = {
              ...response.data.data,
              ...doctor_recommendation,
            };
            return response.data;
          } else {
            return response.data;
          }
        }),
      );
  }
}
