import companySearchTemplate from './company_search.html';
import companySearchTypeaheadTemplate from './company_search_typeahead.html';
import './company_search_typeahead.html';
import './company_search.scss';

class CompanySearchCtrl {

    constructor(BBWidget, halClient, BBModel) {
        'ngInject';

        this.BBWidget = BBWidget;
        this.halClient = halClient;
        this.BBModel = BBModel;

        this.typeaheadOptions = {
            MIN_LENGTH: 2,
            WAIT_MS: 500
        };
    }

    $onInit() {
        this.typeaheadTemplate = companySearchTypeaheadTemplate.id;
    }

    companySelected(company) {
        debugger;
        console.log('companySelected', company);
    }

    companySearchChanged() {
        if (!this.selectedCompany || (this.selectedCompany.length > this.typeaheadOptions.MIN_LENGTH)) {
            this.noResults = false;
        }
    }

    _searchChildren(params) {
        const apiUrl = this.BBWidget.api_url;
        const uri = apiUrl + `/api/v1/company/${params.companyId}/search?company[text]=${params.searchValue}`;
        return new Promise((resolve, reject) => {
            this.halClient.$get(uri, {})
                .then(result => this._handleCompanySearchResponse(result, resolve))
                .catch(err => reject(err));
        });
    }


    _handleCompanySearchResponse(result, resolve) {
        if (result.$has('companies')) {
            result.$get('companies').then((companyBaseResources) => {
                const companyModels = this._buildCompanyModels(companyBaseResources);
                resolve(companyModels);
            });
        } else {
            resolve();
        }
    }

    _buildCompanyModels(baseResources){
        return (Array.from(baseResources).map(company => new this.BBModel.Company(company)));
    }


    searchCompanies(searchValue) {
        const childSearchParams = {
            companyId: this.userId,
            searchValue
        };

        return new Promise((resolve, reject) => {
            this._searchChildren(childSearchParams)
                .then(childCompanies => resolve(childCompanies))
                .catch(() => reject());
        });
    }
}

const component = {
    templateUrl: companySearchTemplate.id,
    controller: CompanySearchCtrl,
    controllerAs: '$bbCompanySearchCtrl',
    bindings: {
        userId: '<',
        selectedCompany: '<',
        onCompanySelected: '&'
    }
};

export default component;