// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.datatypes');
goog.require('cljs.core');

/**
* @constructor
* @param {*} value
* @param {*} range
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Slider = (function (value,range,__meta,__extmap){
this.value = value;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Slider.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Slider.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Slider.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14675,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14675,new cljs.core.Keyword(null,"value","value",1125876963)))
{return self__.value;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14675,new cljs.core.Keyword(null,"range","range",1122184367)))
{return self__.range;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14675,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Slider.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14674){var self__ = this;
var this__4071__auto____$1 = this;var pred__14677 = cljs.core.keyword_identical_QMARK_;var expr__14678 = k__4072__auto__;if(cljs.core.truth_(pred__14677.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__14678)))
{return (new yantra.datatypes.Slider(G__14674,self__.range,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14677.call(null,new cljs.core.Keyword(null,"range","range",1122184367),expr__14678)))
{return (new yantra.datatypes.Slider(self__.value,G__14674,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14674),null));
}
}
});
yantra.datatypes.Slider.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Slider{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1122184367),self__.range],null))], null),self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Slider.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1122184367),self__.range],null))], null),self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Slider.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14674){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Slider(self__.value,self__.range,G__14674,self__.__extmap,self__.__hash));
});
yantra.datatypes.Slider.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Slider.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Slider.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1122184367),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Slider.cljs$lang$type = true;
yantra.datatypes.Slider.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Slider");
});
yantra.datatypes.Slider.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Slider");
});
yantra.datatypes.__GT_Slider = (function __GT_Slider(value,range){return (new yantra.datatypes.Slider(value,range));
});
yantra.datatypes.map__GT_Slider = (function map__GT_Slider(G__14676){return (new yantra.datatypes.Slider(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__14676),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(G__14676),null,cljs.core.dissoc.call(null,G__14676,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"range","range",1122184367))));
});

/**
* @constructor
* @param {*} contents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Column = (function (contents,__meta,__extmap){
this.contents = contents;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Column.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Column.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Column.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14681,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14681,new cljs.core.Keyword(null,"contents","contents",4741549708)))
{return self__.contents;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14681,else__4067__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Column.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14680){var self__ = this;
var this__4071__auto____$1 = this;var pred__14683 = cljs.core.keyword_identical_QMARK_;var expr__14684 = k__4072__auto__;if(cljs.core.truth_(pred__14683.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708),expr__14684)))
{return (new yantra.datatypes.Column(G__14680,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Column(self__.contents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14680),null));
}
});
yantra.datatypes.Column.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Column{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Column.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Column.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14680){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Column(self__.contents,G__14680,self__.__extmap,self__.__hash));
});
yantra.datatypes.Column.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Column(self__.contents,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Column.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Column.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",4741549708),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Column(self__.contents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Column.cljs$lang$type = true;
yantra.datatypes.Column.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Column");
});
yantra.datatypes.Column.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Column");
});
yantra.datatypes.__GT_Column = (function __GT_Column(contents){return (new yantra.datatypes.Column(contents));
});
yantra.datatypes.map__GT_Column = (function map__GT_Column(G__14682){return (new yantra.datatypes.Column(new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(G__14682),null,cljs.core.dissoc.call(null,G__14682,new cljs.core.Keyword(null,"contents","contents",4741549708))));
});

/**
* @constructor
* @param {*} contents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Graphics = (function (contents,__meta,__extmap){
this.contents = contents;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Graphics.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Graphics.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Graphics.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14687,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14687,new cljs.core.Keyword(null,"contents","contents",4741549708)))
{return self__.contents;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14687,else__4067__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14686){var self__ = this;
var this__4071__auto____$1 = this;var pred__14689 = cljs.core.keyword_identical_QMARK_;var expr__14690 = k__4072__auto__;if(cljs.core.truth_(pred__14689.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708),expr__14690)))
{return (new yantra.datatypes.Graphics(G__14686,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14686),null));
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Graphics{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Graphics.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14686){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Graphics(self__.contents,G__14686,self__.__extmap,self__.__hash));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Graphics.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Graphics.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",4741549708),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Graphics.cljs$lang$type = true;
yantra.datatypes.Graphics.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Graphics");
});
yantra.datatypes.Graphics.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Graphics");
});
yantra.datatypes.__GT_Graphics = (function __GT_Graphics(contents){return (new yantra.datatypes.Graphics(contents));
});
yantra.datatypes.map__GT_Graphics = (function map__GT_Graphics(G__14688){return (new yantra.datatypes.Graphics(new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(G__14688),null,cljs.core.dissoc.call(null,G__14688,new cljs.core.Keyword(null,"contents","contents",4741549708))));
});

/**
* @constructor
* @param {*} point
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Point = (function (point,__meta,__extmap){
this.point = point;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14693,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14693,new cljs.core.Keyword(null,"point","point",1120749826)))
{return self__.point;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14693,else__4067__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14692){var self__ = this;
var this__4071__auto____$1 = this;var pred__14695 = cljs.core.keyword_identical_QMARK_;var expr__14696 = k__4072__auto__;if(cljs.core.truth_(pred__14695.call(null,new cljs.core.Keyword(null,"point","point",1120749826),expr__14696)))
{return (new yantra.datatypes.Point(G__14692,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Point(self__.point,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14692),null));
}
});
yantra.datatypes.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Point{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null))], null),self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null))], null),self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14692){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Point(self__.point,G__14692,self__.__extmap,self__.__hash));
});
yantra.datatypes.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Point(self__.point,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1120749826),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Point(self__.point,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Point.cljs$lang$type = true;
yantra.datatypes.Point.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Point");
});
yantra.datatypes.Point.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Point");
});
yantra.datatypes.__GT_Point = (function __GT_Point(point){return (new yantra.datatypes.Point(point));
});
yantra.datatypes.map__GT_Point = (function map__GT_Point(G__14694){return (new yantra.datatypes.Point(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(G__14694),null,cljs.core.dissoc.call(null,G__14694,new cljs.core.Keyword(null,"point","point",1120749826))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Line = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Line.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14699,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14699,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14699,else__4067__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14698){var self__ = this;
var this__4071__auto____$1 = this;var pred__14701 = cljs.core.keyword_identical_QMARK_;var expr__14702 = k__4072__auto__;if(cljs.core.truth_(pred__14701.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__14702)))
{return (new yantra.datatypes.Line(G__14698,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Line(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14698),null));
}
});
yantra.datatypes.Line.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Line{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14698){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Line(self__.points,G__14698,self__.__extmap,self__.__hash));
});
yantra.datatypes.Line.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Line(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Line.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Line.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Line(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Line.cljs$lang$type = true;
yantra.datatypes.Line.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Line");
});
yantra.datatypes.Line.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Line");
});
yantra.datatypes.__GT_Line = (function __GT_Line(points){return (new yantra.datatypes.Line(points));
});
yantra.datatypes.map__GT_Line = (function map__GT_Line(G__14700){return (new yantra.datatypes.Line(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__14700),null,cljs.core.dissoc.call(null,G__14700,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} point
* @param {*} radius
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Disk = (function (point,radius,__meta,__extmap){
this.point = point;
this.radius = radius;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Disk.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14705,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14705,new cljs.core.Keyword(null,"point","point",1120749826)))
{return self__.point;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14705,new cljs.core.Keyword(null,"radius","radius",4370292740)))
{return self__.radius;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14705,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Disk.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14704){var self__ = this;
var this__4071__auto____$1 = this;var pred__14707 = cljs.core.keyword_identical_QMARK_;var expr__14708 = k__4072__auto__;if(cljs.core.truth_(pred__14707.call(null,new cljs.core.Keyword(null,"point","point",1120749826),expr__14708)))
{return (new yantra.datatypes.Disk(G__14704,self__.radius,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14707.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740),expr__14708)))
{return (new yantra.datatypes.Disk(self__.point,G__14704,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14704),null));
}
}
});
yantra.datatypes.Disk.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Disk{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Disk.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Disk.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14704){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Disk(self__.point,self__.radius,G__14704,self__.__extmap,self__.__hash));
});
yantra.datatypes.Disk.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Disk.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Disk.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1120749826),null,new cljs.core.Keyword(null,"radius","radius",4370292740),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Disk.cljs$lang$type = true;
yantra.datatypes.Disk.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Disk");
});
yantra.datatypes.Disk.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Disk");
});
yantra.datatypes.__GT_Disk = (function __GT_Disk(point,radius){return (new yantra.datatypes.Disk(point,radius));
});
yantra.datatypes.map__GT_Disk = (function map__GT_Disk(G__14706){return (new yantra.datatypes.Disk(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(G__14706),new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(G__14706),null,cljs.core.dissoc.call(null,G__14706,new cljs.core.Keyword(null,"point","point",1120749826),new cljs.core.Keyword(null,"radius","radius",4370292740))));
});

/**
* @constructor
* @param {*} p1
* @param {*} p2
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Rectangle = (function (p1,p2,__meta,__extmap){
this.p1 = p1;
this.p2 = p2;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14711,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14711,new cljs.core.Keyword(null,"p1","p1",1013907763)))
{return self__.p1;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14711,new cljs.core.Keyword(null,"p2","p2",1013907764)))
{return self__.p2;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14711,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14710){var self__ = this;
var this__4071__auto____$1 = this;var pred__14713 = cljs.core.keyword_identical_QMARK_;var expr__14714 = k__4072__auto__;if(cljs.core.truth_(pred__14713.call(null,new cljs.core.Keyword(null,"p1","p1",1013907763),expr__14714)))
{return (new yantra.datatypes.Rectangle(G__14710,self__.p2,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14713.call(null,new cljs.core.Keyword(null,"p2","p2",1013907764),expr__14714)))
{return (new yantra.datatypes.Rectangle(self__.p1,G__14710,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14710),null));
}
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Rectangle{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14710){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,G__14710,self__.__extmap,self__.__hash));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",1013907763),null,new cljs.core.Keyword(null,"p2","p2",1013907764),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Rectangle.cljs$lang$type = true;
yantra.datatypes.Rectangle.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Rectangle");
});
yantra.datatypes.Rectangle.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Rectangle");
});
yantra.datatypes.__GT_Rectangle = (function __GT_Rectangle(p1,p2){return (new yantra.datatypes.Rectangle(p1,p2));
});
yantra.datatypes.map__GT_Rectangle = (function map__GT_Rectangle(G__14712){return (new yantra.datatypes.Rectangle(new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(G__14712),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(G__14712),null,cljs.core.dissoc.call(null,G__14712,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764))));
});

/**
* @constructor
* @param {*} style
* @param {*} prims
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Style = (function (style,prims,__meta,__extmap){
this.style = style;
this.prims = prims;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Style.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14717,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14717,new cljs.core.Keyword(null,"style","style",1123684643)))
{return self__.style;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14717,new cljs.core.Keyword(null,"prims","prims",1120839167)))
{return self__.prims;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14717,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Style.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14716){var self__ = this;
var this__4071__auto____$1 = this;var pred__14719 = cljs.core.keyword_identical_QMARK_;var expr__14720 = k__4072__auto__;if(cljs.core.truth_(pred__14719.call(null,new cljs.core.Keyword(null,"style","style",1123684643),expr__14720)))
{return (new yantra.datatypes.Style(G__14716,self__.prims,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14719.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167),expr__14720)))
{return (new yantra.datatypes.Style(self__.style,G__14716,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14716),null));
}
}
});
yantra.datatypes.Style.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.Style{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prims","prims",1120839167),self__.prims],null))], null),self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.Style.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prims","prims",1120839167),self__.prims],null))], null),self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Style.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14716){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.Style(self__.style,self__.prims,G__14716,self__.__extmap,self__.__hash));
});
yantra.datatypes.Style.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Style.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Style.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prims","prims",1120839167),null,new cljs.core.Keyword(null,"style","style",1123684643),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.Style.cljs$lang$type = true;
yantra.datatypes.Style.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Style");
});
yantra.datatypes.Style.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/Style");
});
yantra.datatypes.__GT_Style = (function __GT_Style(style,prims){return (new yantra.datatypes.Style(style,prims));
});
yantra.datatypes.map__GT_Style = (function map__GT_Style(G__14718){return (new yantra.datatypes.Style(new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(G__14718),new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(G__14718),null,cljs.core.dissoc.call(null,G__14718,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"prims","prims",1120839167))));
});

/**
* @constructor
* @param {*} data
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.ListLinePlot = (function (data,opts,__meta,__extmap){
this.data = data;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.ListLinePlot.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14723,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14723,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14723,new cljs.core.Keyword(null,"opts","opts",1017322386)))
{return self__.opts;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14723,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14722){var self__ = this;
var this__4071__auto____$1 = this;var pred__14725 = cljs.core.keyword_identical_QMARK_;var expr__14726 = k__4072__auto__;if(cljs.core.truth_(pred__14725.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__14726)))
{return (new yantra.datatypes.ListLinePlot(G__14722,self__.opts,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14725.call(null,new cljs.core.Keyword(null,"opts","opts",1017322386),expr__14726)))
{return (new yantra.datatypes.ListLinePlot(self__.data,G__14722,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14722),null));
}
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.ListLinePlot{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14722){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,G__14722,self__.__extmap,self__.__hash));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.ListLinePlot.cljs$lang$type = true;
yantra.datatypes.ListLinePlot.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/ListLinePlot");
});
yantra.datatypes.ListLinePlot.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/ListLinePlot");
});
yantra.datatypes.__GT_ListLinePlot = (function __GT_ListLinePlot(data,opts){return (new yantra.datatypes.ListLinePlot(data,opts));
});
yantra.datatypes.map__GT_ListLinePlot = (function map__GT_ListLinePlot(G__14724){return (new yantra.datatypes.ListLinePlot(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(G__14724),new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(G__14724),null,cljs.core.dissoc.call(null,G__14724,new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"opts","opts",1017322386))));
});

/**
* @constructor
* @param {*} data
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.BarChart = (function (data,opts,__meta,__extmap){
this.data = data;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.BarChart.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.BarChart.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.BarChart.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14729,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14729,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14729,new cljs.core.Keyword(null,"opts","opts",1017322386)))
{return self__.opts;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14729,else__4067__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14728){var self__ = this;
var this__4071__auto____$1 = this;var pred__14731 = cljs.core.keyword_identical_QMARK_;var expr__14732 = k__4072__auto__;if(cljs.core.truth_(pred__14731.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__14732)))
{return (new yantra.datatypes.BarChart(G__14728,self__.opts,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14731.call(null,new cljs.core.Keyword(null,"opts","opts",1017322386),expr__14732)))
{return (new yantra.datatypes.BarChart(self__.data,G__14728,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14728),null));
}
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.BarChart{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.BarChart.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14728){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.BarChart(self__.data,self__.opts,G__14728,self__.__extmap,self__.__hash));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.BarChart.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.BarChart.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.BarChart.cljs$lang$type = true;
yantra.datatypes.BarChart.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/BarChart");
});
yantra.datatypes.BarChart.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/BarChart");
});
yantra.datatypes.__GT_BarChart = (function __GT_BarChart(data,opts){return (new yantra.datatypes.BarChart(data,opts));
});
yantra.datatypes.map__GT_BarChart = (function map__GT_BarChart(G__14730){return (new yantra.datatypes.BarChart(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(G__14730),new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(G__14730),null,cljs.core.dissoc.call(null,G__14730,new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"opts","opts",1017322386))));
});

/**
* @constructor
* @param {*} tag
* @param {*} attributes
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.HTMLElement = (function (tag,attributes,children,__meta,__extmap){
this.tag = tag;
this.attributes = attributes;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.HTMLElement.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k14735,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14735,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14735,new cljs.core.Keyword(null,"attributes","attributes",1419549897)))
{return self__.attributes;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14735,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14735,else__4067__auto__);
} else
{return null;
}
}
}
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__14734){var self__ = this;
var this__4071__auto____$1 = this;var pred__14737 = cljs.core.keyword_identical_QMARK_;var expr__14738 = k__4072__auto__;if(cljs.core.truth_(pred__14737.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__14738)))
{return (new yantra.datatypes.HTMLElement(G__14734,self__.attributes,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14737.call(null,new cljs.core.Keyword(null,"attributes","attributes",1419549897),expr__14738)))
{return (new yantra.datatypes.HTMLElement(self__.tag,G__14734,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14737.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__14738)))
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,G__14734,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__14734),null));
}
}
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#yantra.datatypes.HTMLElement{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes","attributes",1419549897),self__.attributes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes","attributes",1419549897),self__.attributes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__14734){var self__ = this;
var this__4063__auto____$1 = this;return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,G__14734,self__.__extmap,self__.__hash));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"attributes","attributes",1419549897),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
yantra.datatypes.HTMLElement.cljs$lang$type = true;
yantra.datatypes.HTMLElement.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/HTMLElement");
});
yantra.datatypes.HTMLElement.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"yantra.datatypes/HTMLElement");
});
yantra.datatypes.__GT_HTMLElement = (function __GT_HTMLElement(tag,attributes,children){return (new yantra.datatypes.HTMLElement(tag,attributes,children));
});
yantra.datatypes.map__GT_HTMLElement = (function map__GT_HTMLElement(G__14736){return (new yantra.datatypes.HTMLElement(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__14736),new cljs.core.Keyword(null,"attributes","attributes",1419549897).cljs$core$IFn$_invoke$arity$1(G__14736),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__14736),null,cljs.core.dissoc.call(null,G__14736,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"attributes","attributes",1419549897),new cljs.core.Keyword(null,"children","children",2673430897))));
});

//# sourceMappingURL=datatypes.js.map