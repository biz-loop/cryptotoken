import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import detectEthereumProvider from '@metamask/detect-provider'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public signOut() {

  }

  public detect() {
    return detectEthereumProvider()
  }
  public signInWithMetaMask() {
    let ethereum: any;

    return from(detectEthereumProvider()).pipe(
      // Step 1: Request (limited) access to users ethereum account
      switchMap(async (provider) => {
        if(!provider){
            throw new Error('Please install Metamask')
        }

        ethereum = provider

        return await ethereum.request({method: 'eth_requestAccounts', params: []})

      }),
      // Step 3: Get the user to sign the nonce with their private key
      switchMap(
        async (response) => {
          console.log("response", response)

          return response
        }
        //
      ),


    );
  }
  private toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }

}
