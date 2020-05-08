import * as API from './';

export default {

  getDomainTree: params => {
    return API.POST('/hip-mdm/admin/getDomainTree', params);
  },
}