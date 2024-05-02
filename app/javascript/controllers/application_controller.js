import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['lista', 'menu'];
  timeoutId = null;

  // Método para mostrar a lista
  showLista() {
    clearTimeout(this.timeoutId); // Limpa qualquer tempo de espera pendente
    this.listaTarget.classList.remove('hidden');
  }

  // Método para ocultar a lista com um atraso
  hideListaWithDelay() {
    this.timeoutId = setTimeout(() => {
      this.listaTarget.classList.add('hidden');
    }, 70); // Tempo de espera em milissegundos (70ms)
  }

  // Método para limpar o tempo de espera
  clearListaTimeout() {
    clearTimeout(this.timeoutId);
  }

  // Manipuladores de eventos para a lista
  onListaMouseEnter() {
    this.clearListaTimeout(); // Limpa qualquer tempo de espera pendente
    this.showLista(); // Mostra a lista imediatamente
  }

  onListaMouseLeave() {
    this.hideListaWithDelay(); // Oculta a lista com um atraso
  }

   // mobile menu
  toggleMenu() {
    this.menuTarget.classList.toggle('hidden');
  }

}