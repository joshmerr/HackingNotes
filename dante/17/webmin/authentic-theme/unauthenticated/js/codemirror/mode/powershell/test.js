!function(){function t(t){test.mode(t,r,Array.prototype.slice.call(arguments,1))}function n(t,n){for(var r=0;r<t.length;r++)n(t[r],r)}var r=CodeMirror.getMode({indentUnit:2},"powershell");t("comment","[number 1][comment # A]"),t("comment_multiline","[number 1][comment <#]","[comment ABC]","[comment #>][number 2]"),n(["0","1234","12kb","12mb","12Gb","12Tb","12PB","12L","12D","12lkb","12dtb","1.234","1.234e56","1.","1.e2",".2",".2e34","1.2MB","1.kb",".1dTB","1.e1gb",".2",".2e34","0x1","0xabcdef","0x3tb","0xelmb"],function(n){t("number_"+n,"[number "+n+"]")}),t("string_literal_escaping","[string 'a''']"),t("string_literal_variable","[string 'a $x']"),t("string_escaping_1",'[string "a `""]'),t("string_escaping_2",'[string "a """]'),t("string_variable_escaping",'[string "a `$x"]'),t("string_variable",'[string "a ][variable-2 $x][string  b"]'),t("string_variable_spaces",'[string "a ][variable-2 ${x y}][string  b"]'),t("string_expression",'[string "a ][punctuation $(][variable-2 $x][operator +][number 3][punctuation )][string  b"]'),t("string_expression_nested",'[string "A][punctuation $(][string "a][punctuation $(][string "w"][punctuation )][string b"][punctuation )][string B"]'),t("string_heredoc",'[string @"]',"[string abc]",'[string "@]'),t("string_heredoc_quotes",'[string @"]',"[string abc \"']",'[string "@]'),t("string_heredoc_variable",'[string @"]',"[string a ][variable-2 $x][string  b]",'[string "@]'),t("string_heredoc_nested_string",'[string @"]','[string a][punctuation $(][string "w"][punctuation )][string b]','[string "@]'),t("string_heredoc_literal_quotes","[string @']","[string abc \"']","[string '@]"),t("array","[punctuation @(][string 'a'][punctuation ,][string 'b'][punctuation )]"),t("hash","[punctuation @{][string 'key'][operator :][string 'value'][punctuation }]"),t("variable","[variable-2 $test]"),t("variable_global","[variable-2 $global:test]"),t("variable_spaces","[variable-2 ${test test}]"),t("operator_splat","[variable-2 @x]"),t("variable_builtin","[builtin $ErrorActionPreference]"),t("variable_builtin_symbols","[builtin $$]"),t("operator","[operator +]"),t("operator_unary","[operator +][number 3]"),t("operator_long","[operator -match]"),n(["(",")","[[","]]","{","}",",","`",";","."],function(n){t("punctuation_"+n.replace(/^[\[\]]/,""),"[punctuation "+n+"]")}),t("keyword","[keyword if]"),t("call_builtin","[builtin Get-ChildItem]")}();