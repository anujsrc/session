// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj14928 = {};return obj14928;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__3466__auto__ = reader;if(and__3466__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3466__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__4105__auto__ = (((reader == null))?null:reader);return (function (){var or__3478__auto__ = (cljs.reader.read_char[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.reader.read_char["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__3466__auto__ = reader;if(and__3466__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3466__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__4105__auto__ = (((reader == null))?null:reader);return (function (){var or__3478__auto__ = (cljs.reader.unread[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.reader.unread["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === 0))
{self__.idx = (self__.idx + 1);
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],-1));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__3478__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);cljs.reader.unread.call(null,reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__14929){
var rdr = cljs.core.first(arglist__14929);
var msg = cljs.core.rest(arglist__14929);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__3466__auto__ = !((ch === "#"));if(and__3466__auto__)
{var and__3466__auto____$1 = !((ch === "'"));if(and__3466__auto____$1)
{var and__3466__auto____$2 = !((ch === ":"));if(and__3466__auto____$2)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3466__auto____$2;
}
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_.call(null,ch)) || (cljs.reader.macro_terminating_QMARK_.call(null,ch)))
{cljs.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__14930 = (function (){sb.append(ch);
return sb;
})();
var G__14931 = cljs.reader.read_char.call(null,rdr);
sb = G__14930;
ch = G__14931;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);var group3 = (groups[2]);if(!(((group3 == null)) || ((group3.length < 1))))
{return 0;
} else
{var negate = ((("-" === (groups[1])))?-1:1);var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[7]))?[(groups[7]),parseInt((groups[7]))]:((new cljs.core.Keyword(null,"default","default",2558708147))?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{return (negate * parseInt(n,radix));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator,10) / parseInt(denominator,10));
});
cljs.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = parseInt(code_str,16);return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char.call(null,reader);var mapresult = cljs.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__14932 = cljs.reader.read_char.call(null,rdr);
ch = G__14932;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4090__auto__ = cljs.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4090__auto__))
{var macrofn = temp__4090__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__14933 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__14933;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch);
var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__14934 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__14934;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char.call(null,rdr);var dm = cljs.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4090__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4090__auto__))
{var obj = temp__4090__auto__;return obj;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__3478__auto__ = (ch == null);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{return cljs.reader.macros.call(null,ch);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__3478__auto__ = cljs.reader.match_number.call(null,s);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__14935 = (function (){buffer.append(ch);
return buffer;
})();
var G__14936 = cljs.reader.read_char.call(null,reader);
buffer = G__14935;
ch = G__14936;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__14937 = (function (){buffer.append(cljs.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__14938 = cljs.reader.read_char.call(null,reader);
buffer = G__14937;
ch = G__14938;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__14939 = (function (){buffer.append(ch);
return buffer;
})();
var G__14940 = cljs.reader.read_char.call(null,reader);
buffer = G__14939;
ch = G__14940;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token.call(null,reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);var token__$1 = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token__$1.indexOf("::",1) === -1))))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.reader.read.call(null,rdr,true,null,true);if((function (){var G__14942 = o;if(G__14942)
{var bit__4128__auto__ = (G__14942.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__4128__auto__) || (G__14942.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__14942.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__14942);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__14942);
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch))
{{
var G__14943 = reader;
var G__14944 = eof_is_error;
var G__14945 = sentinel;
var G__14946 = is_recursive;
reader = G__14943;
eof_is_error = G__14944;
sentinel = G__14945;
is_recursive = G__14946;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__14947 = cljs.reader.read_comment.call(null,reader,ch);
var G__14948 = eof_is_error;
var G__14949 = sentinel;
var G__14950 = is_recursive;
reader = G__14947;
eof_is_error = G__14948;
sentinel = G__14949;
is_recursive = G__14950;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__14951 = reader;
var G__14952 = eof_is_error;
var G__14953 = sentinel;
var G__14954 = is_recursive;
reader = G__14951;
eof_is_error = G__14952;
sentinel = G__14953;
is_recursive = G__14954;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader.call(null,s);return cljs.reader.read.call(null,r,true,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return cljs.core.subs.call(null,s,0,width);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__14955 = b.append("0");
b = G__14955;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_.call(null,year,4)) && ((cljs.reader.indivisible_QMARK_.call(null,year,100)) || (cljs.reader.divisible_QMARK_.call(null,year,400)));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = parseInt(s,10);if(cljs.core.not.call(null,isNaN(n)))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.call(null,null,[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join(''));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__14957 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.call(null,vec__14957,0,null);var years = cljs.core.nth.call(null,vec__14957,1,null);var months = cljs.core.nth.call(null,vec__14957,2,null);var days = cljs.core.nth.call(null,vec__14957,3,null);var hours = cljs.core.nth.call(null,vec__14957,4,null);var minutes = cljs.core.nth.call(null,vec__14957,5,null);var seconds = cljs.core.nth.call(null,vec__14957,6,null);var fraction = cljs.core.nth.call(null,vec__14957,7,null);var offset_sign = cljs.core.nth.call(null,vec__14957,8,null);var offset_hours = cljs.core.nth.call(null,vec__14957,9,null);var offset_minutes = cljs.core.nth.call(null,vec__14957,10,null);var v = vec__14957;if(cljs.core.not.call(null,v))
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join(''));
} else
{var years__$1 = cljs.reader.parse_int.call(null,years);var months__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,months);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 1;
}
})();var days__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,days);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 1;
}
})();var hours__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,hours);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var minutes__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,minutes);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var seconds__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,seconds);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var fraction__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,3));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?-1:1);var offset_hours__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,offset_hours);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var offset_minutes__$1 = (function (){var or__3478__auto__ = cljs.reader.parse_int.call(null,offset_minutes);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return 0;
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * 60) + offset_minutes__$1));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,1,months__$1,12,"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,1,days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,0,hours__$1,23,"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,0,minutes__$1,59,"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,0,seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,59))?60:59),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,0,fraction__$1,999,"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4090__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4090__auto__))
{var vec__14959 = temp__4090__auto__;var years = cljs.core.nth.call(null,vec__14959,0,null);var months = cljs.core.nth.call(null,vec__14959,1,null);var days = cljs.core.nth.call(null,vec__14959,2,null);var hours = cljs.core.nth.call(null,vec__14959,3,null);var minutes = cljs.core.nth.call(null,vec__14959,4,null);var seconds = cljs.core.nth.call(null,vec__14959,5,null);var ms = cljs.core.nth.call(null,vec__14959,6,null);var offset = cljs.core.nth.call(null,vec__14959,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_.call(null,form))
{var arr = [];var seq__14972_14984 = cljs.core.seq.call(null,form);var chunk__14973_14985 = null;var count__14974_14986 = 0;var i__14975_14987 = 0;while(true){
if((i__14975_14987 < count__14974_14986))
{var x_14988 = cljs.core._nth.call(null,chunk__14973_14985,i__14975_14987);arr.push(x_14988);
{
var G__14989 = seq__14972_14984;
var G__14990 = chunk__14973_14985;
var G__14991 = count__14974_14986;
var G__14992 = (i__14975_14987 + 1);
seq__14972_14984 = G__14989;
chunk__14973_14985 = G__14990;
count__14974_14986 = G__14991;
i__14975_14987 = G__14992;
continue;
}
} else
{var temp__4092__auto___14993 = cljs.core.seq.call(null,seq__14972_14984);if(temp__4092__auto___14993)
{var seq__14972_14994__$1 = temp__4092__auto___14993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14972_14994__$1))
{var c__4226__auto___14995 = cljs.core.chunk_first.call(null,seq__14972_14994__$1);{
var G__14996 = cljs.core.chunk_rest.call(null,seq__14972_14994__$1);
var G__14997 = c__4226__auto___14995;
var G__14998 = cljs.core.count.call(null,c__4226__auto___14995);
var G__14999 = 0;
seq__14972_14984 = G__14996;
chunk__14973_14985 = G__14997;
count__14974_14986 = G__14998;
i__14975_14987 = G__14999;
continue;
}
} else
{var x_15000 = cljs.core.first.call(null,seq__14972_14994__$1);arr.push(x_15000);
{
var G__15001 = cljs.core.next.call(null,seq__14972_14994__$1);
var G__15002 = null;
var G__15003 = 0;
var G__15004 = 0;
seq__14972_14984 = G__15001;
chunk__14973_14985 = G__15002;
count__14974_14986 = G__15003;
i__14975_14987 = G__15004;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_.call(null,form))
{var obj = (function (){var obj14977 = {};return obj14977;
})();var seq__14978_15005 = cljs.core.seq.call(null,form);var chunk__14979_15006 = null;var count__14980_15007 = 0;var i__14981_15008 = 0;while(true){
if((i__14981_15008 < count__14980_15007))
{var vec__14982_15009 = cljs.core._nth.call(null,chunk__14979_15006,i__14981_15008);var k_15010 = cljs.core.nth.call(null,vec__14982_15009,0,null);var v_15011 = cljs.core.nth.call(null,vec__14982_15009,1,null);(obj[cljs.core.name.call(null,k_15010)] = v_15011);
{
var G__15012 = seq__14978_15005;
var G__15013 = chunk__14979_15006;
var G__15014 = count__14980_15007;
var G__15015 = (i__14981_15008 + 1);
seq__14978_15005 = G__15012;
chunk__14979_15006 = G__15013;
count__14980_15007 = G__15014;
i__14981_15008 = G__15015;
continue;
}
} else
{var temp__4092__auto___15016 = cljs.core.seq.call(null,seq__14978_15005);if(temp__4092__auto___15016)
{var seq__14978_15017__$1 = temp__4092__auto___15016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14978_15017__$1))
{var c__4226__auto___15018 = cljs.core.chunk_first.call(null,seq__14978_15017__$1);{
var G__15019 = cljs.core.chunk_rest.call(null,seq__14978_15017__$1);
var G__15020 = c__4226__auto___15018;
var G__15021 = cljs.core.count.call(null,c__4226__auto___15018);
var G__15022 = 0;
seq__14978_15005 = G__15019;
chunk__14979_15006 = G__15020;
count__14980_15007 = G__15021;
i__14981_15008 = G__15022;
continue;
}
} else
{var vec__14983_15023 = cljs.core.first.call(null,seq__14978_15017__$1);var k_15024 = cljs.core.nth.call(null,vec__14983_15023,0,null);var v_15025 = cljs.core.nth.call(null,vec__14983_15023,1,null);(obj[cljs.core.name.call(null,k_15024)] = v_15025);
{
var G__15026 = cljs.core.next.call(null,seq__14978_15017__$1);
var G__15027 = null;
var G__15028 = 0;
var G__15029 = 0;
seq__14978_15005 = G__15026;
chunk__14979_15006 = G__15027;
count__14980_15007 = G__15028;
i__14981_15008 = G__15029;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join(''));
} else
{return null;
}
}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol.call(null,rdr,initch);var pfn = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),[cljs.core.str(tag)].join(''));var dfn = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))
{return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{if(cljs.core.truth_(dfn))
{return dfn.call(null,tag,cljs.reader.read.call(null,rdr,true,null,false));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
} else
{return null;
}
}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = [cljs.core.str(tag)].join('');var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = [cljs.core.str(tag)].join('');var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return f;
});})(old_parser))
);
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return null;
});})(old_parser))
);
return old_parser;
});

//# sourceMappingURL=reader.js.map