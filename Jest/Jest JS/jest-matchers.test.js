// PRUEBA
test('asignación de un objeto', () => {
    const datos = { uno: 1 };
    datos['dos'] = 2;
    expect(datos).toEqual({ uno: 1, dos: 2 });
});

// MATCHERS DE VERACIDAD
test('null', () => {
    const n = null;
    expect(n).toBeNull(); // espera que "n" sea igual a null
    expect(n).toBeDefined(); // espera que "n" este definida
    expect(n).not.toBeUndefined(); // espera que "n" no sea undefined
    expect(n).not.toBeTruthy(); // espera que "n" no sea true
    expect(n).toBeFalsy(); // espera que "n" no sea false
});

test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull(); // que "z" no sea null
    expect(z).toBeDefined(); // que "z" este definida
    expect(z).not.toBeUndefined(); // que "z" no sea undefined
    expect(z).not.toBeTruthy(); // que "z" no sea true
    expect(z).toBeFalsy(); // que "z" sea false (0 se considera false)
});

// NUMEROS
test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // que "value" sea mayor que...
    expect(value).toBeGreaterThanOrEqual(3.5); // que "value" sea mayor o igual que...
    expect(value).toBeLessThan(5); // que "value" sea menor que...
    expect(value).toBeLessThanOrEqual(4.5); // que "value" sea menor o igual que...
    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
test('agregando números de punto flotante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
    expect(value).toBeCloseTo(0.3); // Esto funciona.
});

// CADENAS DE TEXTO
test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/); // la cadena no haga "match" con la expresión regular
});
test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stop/); // la cadena haga "match" con la expresión regular
});
//también podemos hacer uso del toBe con cadenas:
test('string', () => {
    expect('team').toBe('team');
});

// VECTORES E ITERABLES
const listaDeCompras = [
    'pañales',
    'pañuelos',
    'bolsas de basura',
    'toallas de papel',
    'leche',
];
test('la leche se encuentra en la lista de compras', () => {
    expect(listaDeCompras).toContain('leche'); // espera que el Arreglo contenga el elemento 'leche'
    expect(new Set(listaDeCompras)).toContain('leche'); // lo mismo con set
});


// EXCEPCIONES
function compilarCódigoAndroid() {
    throw new ConfigError('Usted está usando el código incorrecto');
}
test('La compilacion de android va por buen camino', () => {
    expect(() => compilarCódigoAndroid()).toThrow();
    expect(() => compilarCódigoAndroid()).toThrow(ConfigError);
    // Puede usar también el mensaje de error exacto o una expresión regular
    expect(() => compilarCódigoAndroid()).toThrow('Usted está usando el código incorrecto');
    expect(() => compilarCódigoAndroid()).toThrow(/JDK/);
});