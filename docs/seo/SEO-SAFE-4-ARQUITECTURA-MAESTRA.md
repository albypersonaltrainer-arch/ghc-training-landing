# SEO SAFE 4 — Arquitectura maestra de GHC Training

**Proyecto:** GHC Training
**Dominio canónico oficial:** https://www.ghctraining.com
**Repositorio:** `albypersonaltrainer-arch/ghc-training-landing`
**Versión:** V1.0
**Estado:** Aprobado / baseline oficial
**Fecha de aprobación:** 11 de julio de 2026
**Aprobación final:** Alby Aguiar

---

## 1. Propósito

Este documento establece la arquitectura maestra SEO, GEO, comercial y de conocimiento de GHC Training.

Su objetivo es gobernar la creación de páginas futuras sin alterar el funnel comercial validado de la home, evitar la canibalización entre contenidos y convertir cada página en un activo empresarial reutilizable.

La home continúa siendo el centro del sistema y no se modifica durante SEO SAFE 4.

---

## 2. Separación absoluta de proyectos

Este documento pertenece exclusivamente a:

- GHC Training.
- `ghctraining.com`.
- Repositorio `ghc-training-landing`.

Queda prohibido:

- introducir archivos de GHC Nexus;
- reutilizar componentes de Nexus;
- mezclar arquitectura, SEO o landing de Nexus;
- modificar el repositorio `ghc-nexus`;
- utilizar ZIP antiguos relacionados con el incidente de recuperación.

---

## 3. Posicionamiento empresarial

GHC Training se presenta como una empresa especializada en salud y rendimiento.

Alby Aguiar es:

- CEO;
- fundador;
- director;
- líder;
- principal referente visible.

La comunicación debe transmitir:

- empresa;
- método propio;
- coordinación;
- capacidad profesional;
- estructura preparada para intervenir según cada caso;
- escalabilidad.

Se utilizará principalmente lenguaje en plural:

- analizamos;
- diseñamos;
- acompañamos;
- trabajamos;
- adaptamos.

No se inventará:

- plantilla fija;
- profesionales actualmente activos;
- médicos;
- fisioterapeutas;
- nutricionistas;
- entrenadores;
- instalaciones propias;
- centros físicos no acreditados.

Mensaje de referencia:

> GHC Training es una empresa especializada en salud y rendimiento, liderada por Alby Aguiar, con un método propio y una estructura profesional preparada para intervenir según las necesidades de cada persona, empresa o colectivo.

---

## 4. Identidad visual

Todas las páginas deben mantener la identidad de la landing actual:

- blanco;
- verde GHC;
- negro;
- gris muy claro;
- limpieza visual;
- espacio;
- estética premium;
- coherencia entre páginas;
- navegación intuitiva;
- CTAs consistentes.

### Logo oficial

El logo oficial está implementado en:

`components/ghctraininglogo.tsx`

Componente:

`GHCTrainingLogo`

Color verde principal:

`#22D65B`

Incluye:

- símbolo SVG oficial;
- texto `GHC TRAINING`;
- lema `Health Through Strength`;
- tamaños `sm`, `md` y `lg`;
- variantes para fondos claros y oscuros.

Regla permanente:

- reutilizar siempre el componente oficial;
- no inventar el logo;
- no redibujarlo;
- no reinterpretarlo;
- no sustituirlo.

### Imágenes

Alby no dispone actualmente de más imágenes propias.

Si una página necesita una imagen adicional:

- deberá justificarse por su valor real;
- se propondrá antes a Alby;
- no se generará ninguna imagen sin aprobación expresa;
- deberá ser realista, profesional y coherente con la marca;
- deberá mostrar personas normales;
- no deberá utilizar cuerpos imposibles;
- deberá priorizar salud, entrenamiento y profesionalidad;
- deberá mantener un tratamiento visual común.

---

## 5. Sistema de DNI de activos

Cada activo tendrá un identificador único y estable.

El DNI no cambiará aunque cambien:

- el título;
- la URL;
- el copy;
- el diseño;
- la versión.

### Categorías

| Código | Categoría |
|---|---|
| `GHC-WEB` | Nodos web centrales |
| `GHC-SRV` | Servicios |
| `GHC-MET` | Métodos y sistemas propios |
| `GHC-PAT` | Especialidades de salud |
| `GHC-OBJ` | Objetivos del cliente |
| `GHC-COR` | Empresa, marca y confianza |

### Nodo raíz

`GHC-WEB-001 V1.0`

Nombre:

`GHC Training · Health Through Strength`

Función:

- home principal;
- funnel comercial;
- nodo central;
- distribuidor de autoridad;
- puerta de entrada hacia servicios, especialidades, método y valoración.

---

## 6. Intención de búsqueda

Cada página tendrá una intención principal y podrá incluir una intención secundaria.

| Código | Intención |
|---|---|
| `C` | Comercial |
| `I` | Informacional |
| `N` | Navegacional |
| `T` | Transaccional |

---

## 7. Prioridad empresarial

| Código | Función |
|---|---|
| `P1` | Genera negocio |
| `P2` | Genera autoridad |
| `P3` | Genera confianza |
| `P4` | Refuerza posicionamiento SEO |

---

## 8. Oleada 1 — Registro maestro

| DNI | Página | URL | Intención | Prioridad | Objetivo | Público principal | CTA principal | SEO | Negocio | Autoridad | GEO | Estado | Versión |
|---|---|---|---|---|---|---|---|---:|---:|---:|---:|---|---|
| `GHC-SRV-001` | Entrenador personal en Madrid | `/entrenador-personal-madrid` | C/T | P1 | Captar demanda local y convertirla en valoración presencial | Personas de Madrid que buscan mejorar salud, composición corporal, movilidad, fuerza o rendimiento | Solicitar valoración presencial | 5 | 5 | 3 | 4 | Pendiente de producción | V1.0 |
| `GHC-SRV-002` | Entrenador personal online | `/entrenador-personal-online` | C/T | P1 | Captar clientes fuera de Madrid mediante un servicio remoto profesional | Personas de España y Latinoamérica que necesitan planificación y seguimiento a distancia | Solicitar valoración online | 5 | 5 | 3 | 4 | Pendiente de producción | V1.0 |
| `GHC-MET-001` | Método GHC | `/metodo-ghc` | N/I | P2 | Explicar el sistema propio que diferencia a GHC Training | Personas que comparan profesionales y necesitan comprender por qué confiar en GHC | Empezar con una valoración | 3 | 4 | 5 | 5 | Pendiente de producción | V1.0 |
| `GHC-SRV-003` | Valoración integral | `/valoracion-integral` | T/C | P1 | Ser el principal nodo de entrada comercial | Personas que necesitan saber qué servicio o programa necesitan | Solicitar mi valoración | 4 | 5 | 4 | 4 | Pendiente de producción | V1.0 |
| `GHC-PAT-001` | Entrenamiento para fibromialgia | `/entrenamiento-fibromialgia` | C/I | P1 | Posicionar a GHC como opción especializada, prudente y adaptada | Personas con fibromialgia que buscan actividad física individualizada | Solicitar valoración adaptada | 4 | 4 | 5 | 5 | Pendiente de producción y revisión de evidencia | V1.0 |
| `GHC-PAT-002` | Entrenamiento para lipedema | `/entrenamiento-lipedema` | C/I | P1 | Captar demanda especializada y explicar el entrenamiento adaptado | Personas con lipedema que buscan fuerza, movilidad y acompañamiento | Solicitar valoración adaptada | 4 | 4 | 5 | 5 | Pendiente de producción y revisión de evidencia | V1.0 |
| `GHC-OBJ-001` | Pérdida de grasa | `/perdida-de-grasa` | C/I | P1 | Captar demanda evitando promesas rápidas o genéricas | Personas que quieren reducir grasa y mejorar su salud conservando masa muscular | Solicitar valoración personalizada | 5 | 5 | 4 | 4 | Pendiente de producción | V1.0 |
| `GHC-COR-001` | Sobre GHC Training | `/sobre-ghc-training` | N/I | P3 | Presentar a GHC como empresa y reforzar liderazgo, estructura y confianza | Clientes, empresas, colaboradores y usuarios que investigan la marca | Solicitar valoración | 2 | 3 | 5 | 4 | Pendiente de producción | V1.0 |

---

## 9. Propiedad semántica

Cada página posee un territorio específico.

### `GHC-SRV-001`

Propiedad principal:

`Entrenador personal en Madrid`

No debe:

- competir con la página online;
- convertirse en una página genérica de pérdida de grasa;
- inventar gimnasio, centro o ubicación fija.

### `GHC-SRV-002`

Propiedad principal:

`Entrenador personal online`

No debe:

- duplicar la página de Madrid cambiando únicamente la ubicación;
- ocultar cómo funciona el seguimiento remoto;
- presentarse como una simple entrega de rutinas.

### `GHC-MET-001`

Propiedad principal:

`Método GHC`

No debe:

- competir con una página de servicio concreta;
- limitarse a una descripción comercial;
- convertirse en una repetición de la home.

### `GHC-SRV-003`

Propiedad principal:

`Valoración integral para entrenamiento personalizado`

No debe:

- funcionar como otra página general de servicios;
- prometer diagnóstico médico;
- sustituir una valoración sanitaria cuando sea necesaria.

### `GHC-PAT-001`

Propiedad principal:

`Entrenamiento para fibromialgia`

No debe competir con la futura página informacional:

`Qué es la fibromialgia`

### `GHC-PAT-002`

Propiedad principal:

`Entrenamiento para lipedema`

No debe competir con la futura página informacional:

`Qué es el lipedema`

### `GHC-OBJ-001`

Propiedad principal:

`Entrenamiento personalizado para pérdida de grasa`

No debe:

- competir con la futura página de recomposición corporal;
- prometer resultados rápidos;
- presentar tratamientos nutricionales no incluidos.

### `GHC-COR-001`

Propiedad principal:

`GHC Training como empresa`

No debe sustituir la futura página biográfica específica de Alby Aguiar.

---

## 10. Knowledge Graph

Ningún activo se crea de forma aislada.

### Nodo raíz

`GHC-WEB-001` — Home.

### Hub de autoridad

`GHC-MET-001` — Método GHC.

Debe recibir enlaces desde:

- servicios;
- especialidades;
- objetivos;
- valoración;
- página corporativa.

### Hub de conversión

`GHC-SRV-003` — Valoración integral.

Todas las páginas P1 deben conducir hacia este nodo o hacia el canal oficial de valoración.

### Hub de confianza

`GHC-COR-001` — Sobre GHC Training.

Debe reforzar:

- identidad empresarial;
- liderazgo;
- experiencia;
- método;
- capacidad profesional;
- credibilidad.

### Hubs de modalidad

- `GHC-SRV-001` — Presencial en Madrid.
- `GHC-SRV-002` — Online.

### Nodos de necesidad

- `GHC-PAT-001` — Fibromialgia.
- `GHC-PAT-002` — Lipedema.
- `GHC-OBJ-001` — Pérdida de grasa.

---

## 11. Relaciones internas

### Entrenador personal en Madrid

Relacionado con:

- Home.
- Valoración integral.
- Método GHC.
- Sobre GHC Training.
- Entrenador personal online.
- Pérdida de grasa.
- Fibromialgia.
- Lipedema.

### Entrenador personal online

Relacionado con:

- Home.
- Valoración integral.
- Método GHC.
- Sobre GHC Training.
- Entrenador personal en Madrid.
- Pérdida de grasa.
- Fibromialgia.
- Lipedema.

### Método GHC

Relacionado con:

- Home.
- Valoración integral.
- Servicios.
- Especialidades.
- Objetivos.
- Sobre GHC Training.

### Valoración integral

Relacionado con:

- Home.
- Método GHC.
- Entrenador personal en Madrid.
- Entrenador personal online.
- Especialidades.
- Objetivos.
- Sobre GHC Training.

### Fibromialgia

Relacionado con:

- Home.
- Valoración integral.
- Método GHC.
- Entrenador personal en Madrid.
- Entrenador personal online.
- Sobre GHC Training.
- Futura página de dolor crónico.

### Lipedema

Relacionado con:

- Home.
- Valoración integral.
- Método GHC.
- Entrenador personal en Madrid.
- Entrenador personal online.
- Sobre GHC Training.
- Futura página de linfedema.

### Pérdida de grasa

Relacionado con:

- Home.
- Valoración integral.
- Método GHC.
- Entrenador personal en Madrid.
- Entrenador personal online.
- Sobre GHC Training.
- Futuras páginas de salud metabólica y recomposición corporal.

### Sobre GHC Training

Relacionado con:

- Home.
- Método GHC.
- Valoración integral.
- Servicios.
- Especialidades.
- Objetivos.

---

## 12. Flujo de conversión

Flujo general:

```text
Problema, objetivo o búsqueda
            ↓
Página especializada
            ↓
Método GHC
            ↓
Valoración integral
            ↓
WhatsApp o canal comercial oficial
```

Reglas:

- todas las páginas enlazan hacia la valoración;
- las páginas especializadas enlazan hacia el Método GHC;
- Madrid y online se enlazan como alternativas;
- Sobre GHC Training enlaza hacia método, servicios y valoración;
- la home continúa siendo el centro comercial;
- no se insertarán enlaces sin utilidad real para el usuario.

---

## 13. Sistema de CTA

### CTA conceptual principal

`Solicitar valoración`

Adaptaciones permitidas:

- Solicitar valoración presencial.
- Solicitar valoración online.
- Solicitar valoración adaptada.
- Solicitar valoración personalizada.
- Empezar con una valoración.
- Solicitar mi valoración.

### CTA secundario

`Hablar con GHC Training por WhatsApp`

No se crearán funnels independientes que compitan con el sistema comercial existente.

---

## 14. Plantilla maestra de página

Cada página deberá incluir:

1. Hero.
2. Problema del cliente.
3. Solución GHC.
4. Método GHC.
5. Beneficios.
6. Cómo trabajamos.
7. Por qué confiar en GHC.
8. Preguntas frecuentes.
9. CTA final.
10. Enlaces relacionados.

Cada página debe responder:

> ¿Por qué alguien debería confiar en GHC Training?

---

## 15. Principios de contenido y UX

Cada página debe:

- resolver una intención real;
- hablar primero del problema;
- explicar la solución;
- conectar con el Método GHC;
- mostrar beneficios;
- explicar el proceso;
- reforzar confianza;
- incluir FAQ;
- ofrecer un CTA claro;
- enlazar activos relacionados;
- resultar útil sin depender de repetir palabras clave.

No debe:

- parecer una página SEO fría;
- duplicar la home;
- sacrificar conversión por posicionamiento;
- sobreoptimizar términos;
- utilizar textos genéricos;
- utilizar afirmaciones no verificables.

---

## 16. Contenido sanitario

Las páginas de fibromialgia y lipedema requieren revisión adicional.

Deben:

- utilizar evidencia verificable;
- evitar promesas de curación;
- evitar garantías;
- respetar indicaciones médicas;
- diferenciar entrenamiento y atención sanitaria;
- explicar límites;
- presentar expectativas realistas;
- exigir valoración previa;
- adaptar el trabajo a cada persona.

No podrán utilizar expresiones como:

- curamos la fibromialgia;
- eliminamos el lipedema;
- tratamiento garantizado;
- resultados asegurados;
- sustituye la medicación;
- sustituye el tratamiento médico.

---

## 17. Ficha técnica de activos

Cada activo deberá registrar:

- DNI;
- nombre;
- URL;
- objetivo;
- audiencia;
- intención;
- prioridad;
- CTA;
- palabra clave principal;
- palabras secundarias;
- páginas relacionadas;
- impacto SEO;
- impacto negocio;
- impacto autoridad;
- impacto GEO;
- responsable;
- estado;
- versión;
- fecha de revisión;
- observaciones.

### Gobernanza

| Campo | Norma |
|---|---|
| Propietario | GHC Training |
| Aprobación final | Alby Aguiar |
| Versión inicial | V1.0 |
| Estado inicial | Pendiente de producción |
| Revisión previa a publicación | Obligatoria |
| Revisión periódica | Cada seis meses |
| Fuente comercial | Home y oferta oficial |
| Fuente visual | Landing y activos reales del repositorio |
| Fuente de identidad | Posicionamiento empresarial aprobado |
| Historial | Toda modificación relevante incrementará versión |

---

## 18. Preparación futura

Los DNI y relaciones podrán ser utilizados en el futuro por:

- CRM;
- GHC Nexus;
- agentes;
- GHC Academy;
- biblioteca de conocimiento;
- recursos;
- PDFs;
- cursos;
- dashboards;
- campañas;
- automatizaciones supervisadas.

Esta preparación no autoriza a mezclar proyectos.

Nexus no se modifica durante este bloque.

---

## 19. Elementos fuera de SEO SAFE 4

Quedan fuera:

- creación de páginas;
- código de las páginas;
- generación de imágenes;
- modificación de la home;
- cambios de precios;
- cambios de copy comercial;
- implementación de schema avanzado;
- conexión con Nexus;
- conexión con CRM;
- automatización de agentes;
- resolución de canonical `www` frente a dominio raíz.

La coherencia entre:

- `https://ghctraining.com`;
- `https://www.ghctraining.com`;

permanece registrada como:

`SEO SAFE 3.1`

No bloquea SEO SAFE 4.

---

## 20. Dictamen final

SEO SAFE 4 recibe:

# GO

Quedan cerrados:

- arquitectura maestra;
- Oleada 1;
- URLs;
- DNI;
- intención;
- prioridad;
- objetivos;
- audiencias;
- CTAs;
- matriz de valor;
- propiedad semántica;
- prevención de canibalización;
- enlazado interno;
- Knowledge Graph;
- identidad empresarial;
- coherencia visual;
- gobernanza;
- límites sanitarios;
- preparación futura.

Este documento queda congelado como:

`SEO SAFE 4 — Arquitectura maestra V1.0`

Cualquier modificación futura deberá:

1. estar justificada;
2. respetar los DNI;
3. incrementar la versión cuando corresponda;
4. realizarse mediante rama nueva;
5. pasar por Pull Request;
6. validarse antes de merge.
