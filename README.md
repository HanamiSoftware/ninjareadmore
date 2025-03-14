# Ninja Readmore
Ninja Readmore è un plugin jQuery leggero e flessibile che consente di limitare l'altezza dei paragrafi di testo e aggiungere un link "Leggi di più / Leggi meno" per espandere o contrarre il contenuto. Supporta il grid system di Bootstrap e i modali di Bootstrap.

## 🚀 Caratteristiche

- Imposta un'altezza massima per il testo e aggiunge un link per espandere/contrarre il contenuto.
- Compatibile con Bootstrap e il suo sistema di griglie.
- Supporto per i modali di Bootstrap con un'opzione dedicata.
- Evento personalizzato `hanamiReadmore:init` per estendere le funzionalità.
- Facile da integrare con configurazioni personalizzabili.

## 📦 Installazione

Aggiungi il plugin al tuo progetto includendo i seguenti file:

### 1. Inclusione da CDN (prossima versione)
```html
<script src="https://cdn.jsdelivr.net/npm/hanami-software/ninjaReadmore.min.js"></script>
```

### 2. Inclusione Manuale
Scarica il file `ninjaReadmore.js` e includilo nel tuo progetto:

```html
<script src="path/to/ninjaReadmore.js"></script>
```

Assicurati di includere jQuery prima del plugin:
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## 🔧 Utilizzo

### Esempio Base
```html
<p class="read-more">
    Questo è un testo molto lungo che verrà tagliato a una certa altezza...
</p>

<script>
    $(document).ready(function() {
        $('.read-more').ninjaReadmore();
    });
</script>
```

### Esempio con Bootstrap Modal
```html
<p class="read-more" data-toggle="modal" data-target="#exampleModal">
    Questo testo verrà limitato e visualizzato in un modale Bootstrap.
</p>

<script>
    $(document).ready(function() {
        $('.read-more').ninjaReadmore({ insideModal: true });
    });
</script>
```

## ⚙️ Opzioni
| Opzione      | Tipo    | Default | Descrizione |
|-------------|--------|---------|-------------|
| `height`    | `int`  | `100`   | Altezza massima iniziale del testo (in pixel). |
| `moreText`  | `string` | `'Leggi di più'` | Testo del link per espandere il contenuto. |
| `lessText`  | `string` | `'Leggi meno'` | Testo del link per contrarre il contenuto. |
| `insideModal` | `bool` | `false` | Abilita il supporto per i modali Bootstrap. |

## 🔄 Evento Personalizzato
L'evento `hanamiReadmore:init` viene attivato dopo l'inizializzazione del plugin. Può essere usato per azioni personalizzate.

```javascript
$('.read-more').on('ninjaReadmore:init', function() {
    console.log('NinjaReadmore inizializzato!');
});
```

## 📜 Licenza
Questo progetto è distribuito sotto la licenza **MIT**. Consulta il file `LICENSE` per maggiori dettagli.

## 📩 Contatti & Supporto
Per segnalazioni di bug o richieste di miglioramenti, apri un'**issue** su GitHub.

[Hanami Software](https://github.com/HanamiSoftware) - Creato con ❤️ da Hanami Software. 

If you Liked It!!
<a href="https://www.buymeacoffee.com/hanamisoftware" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
