import CocktailConfig from './CocktailConfig';

export default class CocktailService {
  static getCocktails(text: string) {
    return new Promise(async (resolve, reject) => {
      try {
        let endpoint = `${CocktailConfig.cocktails}${text}`;
        let response: any = await CocktailConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
