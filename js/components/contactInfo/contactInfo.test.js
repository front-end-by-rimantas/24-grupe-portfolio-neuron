import { TestScheduler } from 'jest';
import { renderContactInfo } from './contactInfo.js';

describe('ar tinkamas contactInfo duomenu tipas', () => {
    test('nepriima skaiciaus', () => {
        expect(renderContactInfo(5)).toBe('Netinkamo tipo parametras');
    })
    test('nepriima teksto', () => {
        expect(renderContactInfo('labas')).toBe('Netinkamo tipo parametras');
    })
    test('nepriima array', () => {
        expect(renderContactInfo([])).toBe('Netinkamo tipo parametras');
    })
})

describe('Tikriname, ar objekto struktura yra tinkama', () => {
    test('tuscias objektas', () => {
        expect(renderContactInfo({})).toBe('Netinkamas kiekis objektu raktazodziu')
    })
    test('neuztenka, kai tik vienas raktazodis', () => {
        expect(renderContactInfo({selector: '#demo'})).toBe('Netinkamas kiekis objektu raktazodziu')
    })
    test('netinkamas raktazodziu rinkinys, prigavo "size"', () => {
        expect(renderContactInfo({selector: '#demo', size: 5})).toBe('Neatpazintas raktazodis "size"')
    })
    test('netinkamas raktazodziu rinkinys, prigavo "select"', () => {
        expect(renderContactInfo({select: '#demo', size: 5})).toBe('Neatpazintas raktazodis "select"')
    })
    test('netinkamas raktazodziu rinkinys, "prigavo size"', () => {
        expect(renderContactInfo({size: 5, select: '#demo'})).toBe('Neatpazintas raktazodis "size"')
    })
    test('"list" negali buti skaičius', () => {
        expect(renderContactInfo({selector: '#demo', list: 5})).toBe('Parametras "list" netinkamo formato')
    })
    test('"list" negali buti tekstas', () => {
        expect(renderContactInfo({selector: '#demo', list: 'labas'})).toBe('Parametras "list" netinkamo formato')
    })
    test('"selector" negali buti skaicius', () => {
        expect(renderContactInfo({selector: 5, list: [] })).toBe('Parametras "selector" netinkamo formato')
    })
    test('"selector" negali buti skaicius', () => {
        expect(renderContactInfo({selector: '', list: [] })).toBe('Parametras "selector" netinkamo formato')
    })
})

describe('Tinkami duomenys grazina teisinga "contactInfo" html', () => {
    test('Turi grazinti "true", jei parametrai yra tinkami', () => {
        const params = {
            selector: '#contactInfo_block',
            list: [
                {
                    icon: 'flaticon-placeholder',
                    title: 'Visit us',
                    text: '530 Old BUffalo Street <br> Northwest #205, New York - 3087'
                }
            ]
        }
        expect(renderContactInfo(params)).toBeTruthy();
    })
})