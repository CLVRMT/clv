//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2MVC.DBContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class CYCLE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CYCLE()
        {
            this.SEQUENCEs = new HashSet<SEQUENCE>();
        }
    
        public string id { get; set; }
        public string name { get; set; }
        public string condition_id { get; set; }
        public string type { get; set; }
        public Nullable<int> value { get; set; }
        public string device_id { get; set; }
        public string design_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SEQUENCE> SEQUENCEs { get; set; }
        public virtual DESIGN DESIGN { get; set; }
        public virtual CONDITION CONDITIONs { get; set; }
    }
}
