import { TestScheduler } from 'jest';
import { renderContactInfo } from './contactInfo.js';

describe('Pagrindinė contactInfo duomenu struktura', () => {
    test('nepriima skaiciaus', () => {
        expect(renderContactInfo(5)).toBe('Netinkamo tipo parametras');
    })
    test('nepriima array', () => {
        expect(renderContactInfo([])).toBe('Netinkamo tipo parametras');
    })
    test('nepriima teksto', () => {
        expect(renderContactInfo('labas')).toBe('Netinkamo tipo parametras');
    })
    test('priima objekta', () => {
        expect(renderContactInfo({})).toBeTruthy();
    })
})