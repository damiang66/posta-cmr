export const Aside=()=>{
    return (<>
      <aside className="main-sidebar sidebar-blank-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">CRM POSTA</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info"></div>
        </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Inicio
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fa fa-users" />
                <p>
                  Contactos
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right">6</span>
                </p>
              </a>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Listado
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Procesos
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  Calendario
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fa fa-comments" />
                <p>
                  Mensajes
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    
    </>)
}