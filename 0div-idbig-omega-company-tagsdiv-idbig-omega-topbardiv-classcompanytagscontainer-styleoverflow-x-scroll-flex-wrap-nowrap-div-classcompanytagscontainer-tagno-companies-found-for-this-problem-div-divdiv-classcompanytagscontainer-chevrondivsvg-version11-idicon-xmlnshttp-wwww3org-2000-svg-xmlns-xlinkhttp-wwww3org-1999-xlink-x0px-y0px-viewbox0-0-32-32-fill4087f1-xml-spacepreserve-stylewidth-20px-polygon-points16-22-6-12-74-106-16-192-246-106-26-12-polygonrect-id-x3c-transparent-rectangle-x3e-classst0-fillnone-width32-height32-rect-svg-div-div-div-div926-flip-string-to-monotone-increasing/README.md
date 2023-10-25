<h2><a href="https://leetcode.com/problems/flip-string-to-monotone-increasing/"><div id="big-omega-company-tags"><div id="big-omega-topbar"><div class="companyTagsContainer" style="overflow-x: scroll; flex-wrap: nowrap;"><div class="companyTagsContainer--tag">No companies found for this problem</div></div><div class="companyTagsContainer--chevron"><div><svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" fill="#4087F1" xml:space="preserve" style="width: 20px;"><polygon points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12 "></polygon><rect id="_x3C_Transparent_Rectangle_x3E_" class="st0" fill="none" width="32" height="32"></rect></svg></div></div></div></div>926. Flip String to Monotone Increasing</a></h2><h3>Medium</h3><hr><div><p>A binary string is monotone increasing if it consists of some number of <code>0</code>'s (possibly none), followed by some number of <code>1</code>'s (also possibly none).</p>

<p>You are given a binary string <code>s</code>. You can flip <code>s[i]</code> changing it from <code>0</code> to <code>1</code> or from <code>1</code> to <code>0</code>.</p>

<p>Return <em>the minimum number of flips to make </em><code>s</code><em> monotone increasing</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "00110"
<strong>Output:</strong> 1
<strong>Explanation:</strong> We flip the last digit to get 00111.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "010110"
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 011111, or alternatively 000111.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "00011000"
<strong>Output:</strong> 2
<strong>Explanation:</strong> We flip to get 00000000.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.</li>
</ul>
</div>