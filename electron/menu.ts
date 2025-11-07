import { Menu } from 'electron'

export function setupApplicationMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([]))
}
