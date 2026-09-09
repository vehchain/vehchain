hljs.registerLanguage('asm', function(hljs) {
    return {
        name: 'Assembly',
        case_insensitive: true,
        keywords: {
          keyword: 'mov movl movq add addl sub subl mul imul div idiv push pushl pushq pop popl popq call ret jmp jz jnz je jne cmp cmpl int syscall global extern section align db dw dd dq resb resw resd resq times inc decl incq decq xor xorl and or not shl shr rol ror loop leave enter pusha popa stos movsb cmps scas lods outs ins',
          built_in: 'eax ebx ecx edx esi edi ebp esp eip rax rbx rcx rdx rsi rdi rbp rsp rip al ah bl bh cl ch dl dh ax bx cx dx si di bp sp %eax %ebx %ecx %edx %esi %edi %ebp %esp %eip %rax %rbx %rcx %rdx %rsi %rdi %rbp %rsp %rip %al %ah %bl %bh %cl %ch %dl %dh %ax %bx %cx %dx %si %di %bp %sp'
        },

        contains: [
            {
                className: 'comment',
                begin: ';',
                end: '$',
                relevance: 0
            },
            {
                className: 'comment',
                begin: '#',
                end: '$',
                relevance: 0
            },
            {
                className: 'string',
                begin: '"',
                end: '"',
                relevance: 0
            },
            {
                className: 'string',
                begin: "'",
                end: "'",
                relevance: 0
            },
            {
                className: 'number',
                begin: '\\b[0-9]+\\b',
                relevance: 0
            },
            {
                className: 'number',
                begin: '0x[0-9a-fA-F]+',
                relevance: 0
            },
            {
                className: 'number',
                begin: '\\$[0-9a-fA-F]+',
                relevance: 0
            },
            {
                className: 'label',
                begin: '^[a-zA-Z_][a-zA-Z0-9_]*:',
                relevance: 0
            },
            {
                className: 'label',
                begin: '^[a-zA-Z_][a-zA-Z0-9_]*\\s+db|dw|dd|dq|resb|resw|resd|resq',
                relevance: 0
            },
            {
                className: 'section',
                begin: 'section\\s+\\.[a-zA-Z_]+',
                relevance: 0
            },
            {
                className: 'directive',
                begin: '\\.[a-zA-Z_]+',
                relevance: 0
            }
        ]
    };
});
