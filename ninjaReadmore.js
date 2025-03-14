(function($) {
    $.fn.ninjaReadmore = function(options) {
        // Imposta le opzioni di default
        var settings = $.extend({
            height: 100,         // Altezza massima di default
            moreText: 'Leggi di più',
            lessText: 'Leggi meno',
            insideModal: false   // Se true, attiva il supporto per i modali Bootstrap
        }, options);

        // Funzione per applicare il comportamento "Leggi di più"
        var applyReadmore = function($this) {
            var originalHeight = $this.get(0).scrollHeight; // Altezza reale del contenuto
            var isExpanded = false;

            // Verifica se il contenuto supera l'altezza impostata
            if (originalHeight > settings.height) {
                $this.css({
                    'max-height': settings.height,
                    'overflow': 'hidden'
                });

                // Crea il link "Leggi di più" / "Leggi meno"
                var $toggleLink = $('<a href="#" class="read-more-link d-block mt-2"></a>').text(settings.moreText);
                $this.after($toggleLink);

                // Aggiungi evento di click
                $toggleLink.on('click', function(e) {
                    e.preventDefault();
                    if (isExpanded) {
                        $this.animate({ maxHeight: settings.height }, 300);
                        $toggleLink.text(settings.moreText);
                    } else {
                        $this.animate({ maxHeight: originalHeight }, 300);
                        $toggleLink.text(settings.lessText);
                    }
                    isExpanded = !isExpanded;
                });
            }
        };

        // Inizializza il plugin sugli elementi visibili
        return this.each(function() {
            var $this = $(this);
            
            // Funzione che attiva il plugin all'interno dei modali
            var initInModal = function() {
                if (settings.insideModal) {
                    var $modalParent = $this.closest('.modal');
                    if ($modalParent.length) {
                        $modalParent.on('shown.bs.modal', function() {
                            applyReadmore($this);
                        });
                    } else {
                        applyReadmore($this);
                    }
                } else {
                    applyReadmore($this);
                }
            };

            // Inizializza il plugin
            initInModal();

            // Trigger evento personalizzato dopo l'inizializzazione
            $this.trigger('hanamiReadmore:init');
        });
    };
}(jQuery));
