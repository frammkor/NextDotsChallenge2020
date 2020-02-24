import {APIConnector} from '..';
import config from '../../config';

const apiConnector = new APIConnector({timeout: 50000});

export default class CocktailConfig {
  static props: any;
  static get endpoint(): string {
    return `${config.API_URL}/search.php?s=`;
  }

  static get cocktails(): string {
    return `${CocktailConfig.endpoint}`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
