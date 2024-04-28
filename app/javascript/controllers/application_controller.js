import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['menu', 'lista'];

  // Dropdown List
  toggleLista() {
    this.listaTarget.classList.toggle('hidden');
  }

  // mobile menu
  toggleMenu() {
    this.menuTarget.classList.toggle('hidden');
    console.log('foi')
  }
}